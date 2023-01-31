import {KeyboardType} from 'react-native';
export type OptionType = {
  label: string;
  value: number | string;
};
export type FormFieldType = {
  placeholder?: string;
  label?: string;
  type: string;
  name: string;
  enabled?: boolean;
  options?: OptionType[];
  keyboardType?: KeyboardType;
};
