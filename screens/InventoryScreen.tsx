import React from 'react';
import {InventoryContainer} from '../features/inventory/InventoryContainer';
import {SafeAreaView} from 'react-native';

export const InventoryScreen = () => {
  return (
    <SafeAreaView>
      <InventoryContainer />
    </SafeAreaView>
  );
};
