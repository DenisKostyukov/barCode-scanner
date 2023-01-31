import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {moveItemSchema} from '../../../../validationSchema/validationSchema';
import {View} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import {Button} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {getWareHouses} from '../../../../asyncThunks/wareHouse/getWareHouses';
import {selectWareHouses} from '../../../../app/slices/wareHousesSlice';
import {WareHouseType} from '../../../../types/wareHouse.type';
import {Select} from '../../../../components/Select/Select';
import {selectInventory} from '../../../../app/slices/inventorySlice';
import {
  InventoryType,
  MoveItemType,
} from '../../../../types/wareHouseInventory.type';
import {getInventory} from '../../../../asyncThunks/inventory/getInventory';
import {moveItem} from '../../../../asyncThunks/inventory/moveItem';
import {FormFieldType} from '../../../../types/common';

const initialForm = {
  senderId: 0,
  recipientId: 0,
  quantity: '',
  itemId: 0,
};

export const MoveItemForm = () => {
  const dispatch = useAppDispatch();
  const {wareHouses} = useAppSelector(selectWareHouses);
  const {inventories} = useAppSelector(selectInventory);
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: {errors},
  } = useForm<any>({
    resolver: yupResolver(moveItemSchema),
    defaultValues: initialForm,
    mode: 'onChange',
  });
  const senderWarehouse = watch('senderId');
  const itemId = watch('itemId');
  const getItemQuantity = () => {
    const foundInventory = inventories.find(
      inventory => inventory.item.id === itemId,
    );
    setItemQuantity(foundInventory?.quantity || 0);
  };
  useEffect(() => {
    dispatch(getWareHouses);
  }, []);
  useEffect(() => {
    dispatch(getInventory(senderWarehouse));
  }, [senderWarehouse]);
  useEffect(() => {
    getItemQuantity();
  }, [itemId]);
  const fields: FormFieldType[] = [
    {
      name: 'senderId',
      label: 'Sender warehouse',
      placeholder: 'Select sender',
      options: wareHouses.map((option: WareHouseType) => {
        return {label: option.name, value: option.id};
      }),
      type: 'select',
    },
    {
      name: 'itemId',
      label: 'Select item',
      placeholder: 'Select item',
      enabled: !!senderWarehouse,
      options: inventories.map((option: InventoryType) => {
        return {label: option.name, value: option.item.id};
      }),
      type: 'select',
    },
    {
      name: 'quantity',
      label: `Quantity max: ${itemQuantity}`,
      placeholder: 'Quantity',
      keyboardType: 'numeric',
      type: 'input',
    },
    {
      name: 'recipientId',
      label: 'Recipient warehouse',
      placeholder: 'Select recipient',
      options: wareHouses.map((option: WareHouseType) => {
        return {label: option.name, value: option.id};
      }),
      type: 'select',
    },
  ];

  const onSubmit = (formData: MoveItemType) => {
    const moveItemData = {...formData, quantity: Number(formData.quantity)};
    dispatch(moveItem(moveItemData));
    reset();
  };

  return (
    <View>
      {fields.map(field => {
        if (field.type === 'input') {
          return (
            <Controller
              key={field.name}
              control={control}
              name={field.name}
              render={({field: {onChange, value}}) => (
                <Input
                  id={field.name}
                  value={value}
                  keyboardType={field?.keyboardType}
                  label={field.label}
                  onChangeText={onChange}
                  placeholder={field.placeholder}
                  errorMessage={
                    value > itemQuantity
                      ? 'Quantity error'
                      : (errors[field.name]?.message as string)
                  }
                />
              )}
            />
          );
        }
        if (field.type === 'select') {
          return (
            <Controller
              key={field.name}
              control={control}
              name={field.name}
              render={({field: {onChange, value}}) => (
                <Select
                  value={value}
                  options={field.options}
                  onChange={onChange}
                  enabled={field.enabled}
                  label={field.label}
                  placeholder={field.placeholder}
                  errorMessage={errors[field.name]?.message as string}
                />
              )}
            />
          );
        }
      })}
      <View style={{marginTop: 10, width: '90%', marginHorizontal: '5%'}}>
        <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
        <Button
          title={'Cancel'}
          onPress={() => reset()}
          containerStyle={{marginTop: 10}}
        />
      </View>
    </View>
  );
};
