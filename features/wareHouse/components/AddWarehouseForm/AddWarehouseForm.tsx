import React, {FC} from 'react';
import {useAppDispatch} from '../../../../hooks/redux';
import {useForm, Controller} from 'react-hook-form';
import {View} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import {addWarehouseSchema} from '../../../../validationSchema/validationSchema';
import {yupResolver} from '@hookform/resolvers/yup';

import {Button} from '@rneui/base';
import {FormFieldType} from '../../../../types/common';
import {fields} from './formfields';
import {addWarehouse} from '../../../../asyncThunks/wareHouse/addWarehouse';
import {getWareHouses} from '../../../../asyncThunks/wareHouse/getWareHouses';

const initialForm = {
  name: '',
  desc: '',
};
type AddWarehouseFormProps = {
  handleCloseModal: () => void;
};
export const AddWarehouseForm: FC<AddWarehouseFormProps> = ({
  handleCloseModal,
}) => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<any>({
    resolver: yupResolver(addWarehouseSchema),
    defaultValues: initialForm,
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    await dispatch(addWarehouse(data));
    await dispatch(getWareHouses());
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
