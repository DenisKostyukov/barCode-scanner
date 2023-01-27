import React from 'react';
import {ItemsScreen} from '../screens/ItemsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WarHouseScreen} from '../screens/WareHouse';
import {RootStackList} from '../types/stack.type';

export type WareHouseStackList = {
  WareHouse: undefined;
  Items: undefined;
};

const Stack = createNativeStackNavigator<RootStackList>();
export const WareHouseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'WareHouse'} component={WarHouseScreen} />
      <Stack.Screen
        name={'Items'}
        component={ItemsScreen}
        options={({route}) => ({title: route.params.warehouse.name})}
      />
    </Stack.Navigator>
  );
};
