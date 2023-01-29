import {WareHouseType} from './wareHouse.type';

export type RootStackList = {
  Home: undefined;
  Warehouse: undefined;
  Inventory: {warehouse: WareHouseType};
  MoveItem: undefined;
};
