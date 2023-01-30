import React, {FC} from 'react';
import {useAppDispatch} from '../../../../hooks/redux';
import {useForm, Controller} from 'react-hook-form';
import {View} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import {addItemSchema} from '../../../../validationSchema/validationSchema';
import {yupResolver} from '@hookform/resolvers/yup';
import {fields} from './formFields';
import {
  AddItemType,
  InventoryItem,
} from '../../../../types/wareHouseInventory.type';
import {addItem} from '../../../../asyncThunks/inventory/addItem';
import {addInventory} from '../../../../asyncThunks/inventory/addInventory';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackList} from '../../../../types/stack.type';
import {Screens} from '../../../../enum/screens.enum';
import {getInventory} from '../../../../asyncThunks/inventory/getInventory';
import {Button} from '@rneui/base';
import {FormFieldType} from '../../../../types/common';

const initialForm = {
  name: '',
  desc: '',
  warCode: '',
  quantity: '',
};
type AddItemFormProps = {
  handleCloseModal: () => void;
};
export const AddItemForm: FC<AddItemFormProps> = ({handleCloseModal}) => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackList, Screens.INVENTORY>>();
  const {warehouse} = route.params;
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<any>({
    resolver: yupResolver(addItemSchema),
    defaultValues: initialForm,
    mode: 'onChange',
  });

  const onSubmit = async (data: AddItemType & {quantity: string}) => {
    const addItemData = {
      name: data.name,
      desc: data.desc,
      warCode: data.warCode,
    };
    const result = await dispatch(addItem(addItemData));
    const addInventoryData = {
      name: data.name,
      desc: data.desc,
      itemId: (result.payload as InventoryItem).id,
      quantity: Number(data.quantity),
      warehouseId: warehouse.id,
    };
    await dispatch(addInventory(addInventoryData));
    await dispatch(getInventory(warehouse.id));
    reset();
    handleCloseModal();
  };
  return (
    <View>
      {fields.map((field: FormFieldType) => {
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
      })}

      <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
      <Button
        title={'Cancel'}
        onPress={handleCloseModal}
        containerStyle={{marginTop: 10}}
      />
    </View>
  );
};
