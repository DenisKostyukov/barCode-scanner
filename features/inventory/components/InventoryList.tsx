import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getInventory} from '../../../asyncThunks/inventory/getInventory';
import {ActivityIndicator, View} from 'react-native';
import {selectInventory} from '../../../app/slices/inventorySlice';
import {InventoryType} from '../../../types/wareHouseInventory.type';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackList} from '../../../types/stack.type';
import {Screens} from '../../../enum/screens.enum';
import {InventoryItem} from './InventoryItem';
import {styles} from '../styles';

export const InventoryList = () => {
  const dispatch = useAppDispatch();
  const {inventories, loading} = useAppSelector(selectInventory);
  const route = useRoute<RouteProp<RootStackList, Screens.INVENTORY>>();
  const warehouseId = route.params.warehouse.id;
  useEffect(() => {
    dispatch(getInventory(warehouseId));
  }, [dispatch, warehouseId]);
  if (loading === 'pending') {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.inventoryListBlock}>
      {inventories.map((inventory: InventoryType) => {
        return <InventoryItem key={inventory.id} inventory={inventory} />;
      })}
    </View>
  );
};
