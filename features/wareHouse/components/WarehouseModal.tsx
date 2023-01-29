import React, {FC} from 'react';
import {AddWarehouseForm} from './AddWarehouseForm/AddWarehouseForm';
type WarehouseModalType = {
  handleCloseModal: () => void;
};
export const WarehouseModal: FC<WarehouseModalType> = ({handleCloseModal}) => {
  return <AddWarehouseForm handleCloseModal={handleCloseModal} />;
};
