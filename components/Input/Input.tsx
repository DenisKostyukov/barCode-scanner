import * as React from 'react';
import {Input as RNInput, InputProps} from '@rneui/base';
import {FC} from 'react';

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
      placeholder={placeholder}
      onChangeText={onChangeText}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      id={id}
    />
  );
};
