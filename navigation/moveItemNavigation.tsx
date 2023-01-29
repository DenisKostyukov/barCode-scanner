import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackList} from '../types/stack.type';
import React from 'react';
import {MoveItemScreen} from '../screens/MoveItemScreen';

const Stack = createNativeStackNavigator<RootStackList>();

export const MoveItemNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MoveItem'}
        component={MoveItemScreen}
        options={() => ({title: 'Move item'})}
      />
    </Stack.Navigator>
  );
};
