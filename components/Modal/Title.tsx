import React, {FC} from 'react';
import {Text} from '../Text/Text';
import {styles} from './styles';
type ModalTitleProps = {
  title: string;
};
export const ModalTitle: FC<ModalTitleProps> = ({title}) => {
  return <Text text={title} customStyles={styles.titleStyle} />;
};
