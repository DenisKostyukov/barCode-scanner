import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../Text/Text';
import {Picker} from '@react-native-picker/picker';
import {styles} from './style';
import {OptionType} from '../../types/common';

type SelectProps = {
  placeholder?: string;
  label?: string;
  value: string | number;
  options?: OptionType[];
  onChange: () => void;
  customStyles?: object;
  enabled?: boolean;
  errorMessage?: string;
};

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  customStyles,
  enabled,
  errorMessage,
}) => {
  return (
    <View style={[styles.selectContainer, customStyles]}>
      <View style={[styles.selectWrapper, customStyles]}>
        <Text text={label as string} customStyles={styles.labelStyles} />
        <Picker
          style={{color: '#000'}}
          selectedValue={value}
          onValueChange={onChange}
          dropdownIconColor={'#000'}
          enabled={enabled}
          placeholder={placeholder}>
          <Picker.Item label={label} enabled={false} />
          {options?.map((option: OptionType, index: number) => {
            return (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            );
          })}
        </Picker>
      </View>
      <Text text={errorMessage || ''} customStyles={styles.errorStyle} />
    </View>
  );
};
