import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {commonStyles} from '../../../styles/styles';
import {InventoryType} from '../../../types/wareHouseInventory.type';
import {styles} from '../styles';

type InventoryItemProps = {
  item: InventoryType;
};
export const InventoryItem: FC<InventoryItemProps> = ({item}) => {
  return (
    <View style={styles.inventoryItemBlock}>
      <View>
        <Text text={'name:'} customStyles={commonStyles.propertyDesc} />
        <Text text={item.name} customStyles={commonStyles.propertyValue} />
      </View>
      <View>
        <Text text={'quantity:'} customStyles={commonStyles.propertyDesc} />
        <Text text={item.quantity} customStyles={commonStyles.propertyValue} />
      </View>
      <View>
        <Text text={'description:'} customStyles={commonStyles.propertyDesc} />
        <Text text={item.desc} customStyles={commonStyles.propertyValue} />
      </View>
    </View>
  );
};
