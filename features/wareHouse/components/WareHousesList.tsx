import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getWareHouses} from '../../../asyncThunks/wareHouse/getWareHouses';
import {selectWareHouses} from '../../../app/slices/wareHousesSlice';
import {WareHouseType} from '../../../types/wareHouse.type';
import {WarehouseItem} from './WarehouseItem';
import {View} from 'react-native';
import {styles} from '../styles';
export const WareHousesList = () => {
  const dispatch = useAppDispatch();
  const {wareHouses} = useAppSelector(selectWareHouses);
  console.log(wareHouses);
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  useEffect(() => {
    dispatch(getWareHouses());
  }, [dispatch]);
  return (
    <View style={styles.wareHouseList}>
      {wareHouses.map((wareHouse: WareHouseType) => {
        return <WarehouseItem key={wareHouse.id} warehouse={wareHouse} />;
      })}
    </View>
  );
};
