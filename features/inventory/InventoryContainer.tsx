import React from 'react';
import {ScrollView} from 'react-native';
import {InventoryList} from './components/InventoryList';
import {commonStyles} from '../../styles/styles';

export const InventoryContainer = () => {
  return (
    <ScrollView style={commonStyles.container}>
      <InventoryList />
    </ScrollView>
  );
};
