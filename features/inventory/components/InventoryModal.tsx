import React, {FC} from 'react';
import {AddItemForm} from './AddItemForm/AddItemForm';
type InventoryModalType = {
  handleCloseModal: () => void;
};
export const InventoryModal: FC<InventoryModalType> = ({handleCloseModal}) => {
  return <AddItemForm handleCloseModal={handleCloseModal} />;
};
