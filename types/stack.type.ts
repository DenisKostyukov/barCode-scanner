import {WareHouseType} from './wareHouse.type';

export type RootStackList = {
  Home: undefined;
  WareHouse: undefined;
  Inventory: {warehouse: WareHouseType};
};
