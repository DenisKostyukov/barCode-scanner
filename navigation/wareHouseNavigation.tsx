import React from 'react';
import {InventoryScreen} from '../screens/InventoryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WarHouseScreen} from '../screens/WareHouse';
import {RootStackList} from '../types/stack.type';

const Stack = createNativeStackNavigator<RootStackList>();
export const WareHouseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Warehouse'} component={WarHouseScreen} />
      <Stack.Screen
        name={'Inventory'}
        component={InventoryScreen}
        options={({route}) => ({title: route.params.warehouse.name})}
      />
    </Stack.Navigator>
  );
};
