type InventoryItem = {
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
