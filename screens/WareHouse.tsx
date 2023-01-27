import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {useAppDispatch} from '../hooks/redux';
import {getWareHouses} from '../asyncThunks/wareHouse/getWareHouses';
import {Screens} from '../enum/screens.enum';

export const WarHouseScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWareHouses());
  }, [dispatch]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{color: '#000'}}
        onPress={() => navigation.navigate(Screens.ITEMS)}>
        Home!regthruyjiuoipui[o[
      </Text>
    </View>
  );
};
