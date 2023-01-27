import React from 'react';
import {ItemsScreen} from '../screens/ItemsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WarHouseScreen} from '../screens/WareHouse';

const Stack = createNativeStackNavigator();
export const WareHouseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={WarHouseScreen} />
      <Stack.Screen name={'Items'} component={ItemsScreen} />
    </Stack.Navigator>
  );
};
