import React, {FC} from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
type TextProps = {
  text: string | number;
  customStyles?: object;
};
export const Text: FC<TextProps> = ({text, customStyles}) => {
  return <RNText style={[styles.textStyle, customStyles]}>{text}</RNText>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
  },
});
