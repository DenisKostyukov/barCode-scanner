import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WareHouseNavigation} from './wareHouseNavigation';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();
export const Navigation = () => {
  const getOptions = (focused: boolean, tabName: string) => (
    <Text
      allowFontScaling={false}
      style={{
        color: focused ? 'red' : '#000',
        width: 50,
        fontSize: 11,
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
            tabBarIcon: ({focused}) => getOptions(focused, 'Home'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
