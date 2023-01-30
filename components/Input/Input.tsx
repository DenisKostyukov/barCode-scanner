import * as React from 'react';
import {Input as RNInput, InputProps} from '@rneui/base';
import {FC} from 'react';
import {styles} from './styles';

// type InputPropsC = {
//   onChange: () => void;
//   disabled: boolean;
//   placeholder: string;
// };

export const Input: FC<InputProps> = ({
  errorMessage,
  label,
  placeholder,
  onChangeText,
  disabled,
  defaultValue,
  value,
  id,
}) => {
  return (
    <RNInput
      errorMessage={errorMessage}
      label={label}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      placeholderTextColor={'#000'}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      errorStyle={styles.errorStyle}
      placeholder={placeholder}
      onChangeText={onChangeText}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      id={id}
    />
  );
};
