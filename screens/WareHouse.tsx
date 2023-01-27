import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {useAppDispatch} from '../hooks/redux';
import {getWareHouses} from '../asyncThunks/wareHouse/getWareHouses';
import {Screens} from '../enum/screens.enum';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../types/stack.type';

export const WarHouseScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
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
