export type InventoryItem = {
  id: number;
  name: string;
  desc: string;
  warCode: string;
};
export type InventoryType = {
  id: number;
  name: string;
  desc: string;
  quantity: number;
  item: InventoryItem;
};
export type WareHouseInventoryType = {
  id: number;
  name: string;
  desc: string;
  inventories: InventoryType[];
};
export type AddItemType = {
  name: string;
  desc: string;
  warCode: string;
};
export type AddInventoryType = {
  name: string;
  desc: string;
  itemId: number;
  quantity: number;
  warehouseId: number;
};
