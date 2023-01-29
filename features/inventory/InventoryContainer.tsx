import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {InventoryList} from './components/InventoryList';
import {commonStyles} from '../../styles/styles';
import {Modal} from '../../components/Modal/Modal';
import {InventoryModal} from './components/InventoryModal';
import {Button} from '@rneui/base';
import {styles} from './styles';

export const InventoryContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={commonStyles.container}>
      <Button
        title={'Add item'}
        containerStyle={[commonStyles.addButton, styles.addItemBtn]}
        onPress={toggleModal}
      />
      <Modal
        isVisible={isModalVisible}
        closeHandler={toggleModal}
        title={'Add item'}>
        <InventoryModal handleCloseModal={toggleModal} />
      </Modal>
      <InventoryList />
    </ScrollView>
  );
};
