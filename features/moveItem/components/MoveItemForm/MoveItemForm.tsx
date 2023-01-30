import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {moveItemSchema} from '../../../../validationSchema/validationSchema';
import {View} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import {Button} from '@rneui/base';
import React, {useEffect} from 'react';
import {getWareHouses} from '../../../../asyncThunks/wareHouse/getWareHouses';
import {selectWareHouses} from '../../../../app/slices/wareHousesSlice';
import {WareHouseType} from '../../../../types/wareHouse.type';
import {Select} from '../../../../components/Select/Select';
import {selectInventory} from '../../../../app/slices/inventorySlice';
import {InventoryType} from '../../../../types/wareHouseInventory.type';
import {getInventory} from '../../../../asyncThunks/inventory/getInventory';

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
  useEffect(() => {
    dispatch(getWareHouses);
  }, [dispatch]);
  useEffect(() => {
    dispatch(getInventory(senderWarehouse));
  }, [dispatch, senderWarehouse]);
  const fields = [
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
        return {label: option.name, value: option.id};
      }),
      type: 'select',
    },
    {
      name: 'quantity',
      label: 'Quantity',
      placeholder: 'Quantity',
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

  const onSubmit = (data: any) => {
    console.log(data);
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
                  label={field.label}
                  onChangeText={onChange}
                  placeholder={field.placeholder}
                  errorMessage={errors[field.name]?.message as string}
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

      <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
      <Button
        title={'Cancel'}
        // onPress={handleCloseModal}
        containerStyle={{marginTop: 10}}
      />
    </View>
  );
};
