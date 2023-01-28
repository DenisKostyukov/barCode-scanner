import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getInventory} from '../../../asyncThunks/inventory/getInventory';
import {View} from 'react-native';
import {selectInventory} from '../../../app/slices/inventorySlice';
import {InventoryType} from '../../../types/wareHouseInventory.type';
import {Text} from '../../../components/Text/Text';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackList} from '../../../types/stack.type';
import {Screens} from '../../../enum/screens.enum';
import {InventoryItem} from './InventoryItem';
import {styles} from '../styles';

export const InventoryList = () => {
  const dispatch = useAppDispatch();
  const {inventories} = useAppSelector(selectInventory);
  const route = useRoute<RouteProp<RootStackList, Screens.INVENTORY>>();
  const warehouseId = route.params.warehouse.id;
  console.log('inventories ', inventories);
  useEffect(() => {
    dispatch(getInventory(warehouseId));
  }, [dispatch, warehouseId]);
  return (
    <View style={styles.inventoryListBlock}>
      {inventories.map((item: InventoryType) => {
        return <InventoryItem key={item.id} item={item} />;
      })}
    </View>
  );
};
