import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {InventoryList} from './components/InventoryList';
import {commonStyles} from '../../styles/styles';
import {Modal} from '../../components/Modal/Modal';
import {InventoryModal} from './components/InventoryModal';
import {Button} from '@rneui/base';
import {styles} from './styles';

export const InventoryContainer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <ScrollView style={commonStyles.container}>
      <Button
        title={'Add item'}
        containerStyle={[commonStyles.addButton, styles.addItemBtn]}
        onPress={() => setIsVisible(true)}
      />
      <Modal
        isVisible={isVisible}
        closeHandler={() => setIsVisible(false)}
        title={'Add item'}>
        <InventoryModal handleCloseModal={() => setIsVisible(false)} />
      </Modal>
      <InventoryList />
    </ScrollView>
  );
};
