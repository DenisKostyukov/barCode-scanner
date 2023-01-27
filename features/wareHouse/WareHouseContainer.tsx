import React from 'react';
import {WareHousesList} from './components/WareHousesList';
import {ScrollView} from 'react-native';
import {commonStyles} from '../../styles/styles';
export const WareHouseContainer = () => {
  return (
    <ScrollView style={commonStyles.container}>
      <WareHousesList />
    </ScrollView>
  );
};
