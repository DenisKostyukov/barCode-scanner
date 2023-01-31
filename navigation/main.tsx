import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WareHouseNavigation} from './wareHouseNavigation';
import {Text} from 'react-native';
import {MoveItemNavigation} from './moveItemNavigation';
const Tab = createBottomTabNavigator();

export const Navigation = () => {
  const getOptions = (focused: boolean, tabName: string) => (
    <Text
      allowFontScaling={false}
      style={{
        color: focused ? 'red' : '#000',

        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',
      }}>
      {tabName}
    </Text>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarStyle: {height: 50},
        }}>
        <Tab.Screen
          name={'HomeTab'}
          component={WareHouseNavigation}
          options={{
            tabBarIcon: ({focused}) => getOptions(focused, 'Warehouse'),
          }}
        />
        <Tab.Screen
          name={'MoveItemTab'}
          component={MoveItemNavigation}
          options={{
            tabBarIcon: ({focused}) => getOptions(focused, 'Move item'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
