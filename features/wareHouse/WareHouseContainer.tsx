import React, {useState} from 'react';
import {WareHousesList} from './components/WareHousesList';
import {ScrollView} from 'react-native';
import {commonStyles} from '../../styles/styles';
import {styles} from './styles';
import {Button} from '@rneui/base';
import {Modal} from '../../components/Modal/Modal';
import {WarehouseModal} from './components/WarehouseModal';
export const WareHouseContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={commonStyles.container}>
      <Button
        title={'Add warehouse'}
        containerStyle={[commonStyles.addButton, styles.addWarehouseBtn]}
        onPress={toggleModal}
      />
      <Modal
        isVisible={isModalVisible}
        closeHandler={toggleModal}
        title={'Add warehouse'}>
        <WarehouseModal handleCloseModal={toggleModal} />
      </Modal>
      <WareHousesList />
    </ScrollView>
  );
};
