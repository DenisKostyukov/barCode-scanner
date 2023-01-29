import {Dialog} from '@rneui/themed';
import React, {FC, ReactNode} from 'react';
import {ModalTitle} from './Title';
import {styles} from './styles';

type ModalProps = {
  isVisible: boolean;
  closeHandler: () => void;
  title?: string;
  children: ReactNode;
  actionButtons?: ReactNode;
};
export const Modal: FC<ModalProps> = ({
  isVisible,
  closeHandler,
  title,
  children,
  actionButtons,
}) => {
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={closeHandler}
      style={styles.modalWrapper}>
      {title && <ModalTitle title={title} />}
      {children}
      {actionButtons && <Dialog.Actions>{actionButtons}</Dialog.Actions>}
    </Dialog>
  );
};
