import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {commonStyles} from '../../../styles/styles';
import {InventoryType} from '../../../types/wareHouseInventory.type';
import {styles} from '../styles';
import {Button} from '@rneui/base';
import {useAppDispatch} from '../../../hooks/redux';
import {takeOut} from '../../../asyncThunks/inventory/takeOut';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackList} from '../../../types/stack.type';
import {Screens} from '../../../enum/screens.enum';
import {getInventory} from '../../../asyncThunks/inventory/getInventory';

type InventoryItemProps = {
  inventory: InventoryType;
};
export const InventoryItem: FC<InventoryItemProps> = ({inventory}) => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackList, Screens.INVENTORY>>();
  const warehouseId = route.params.warehouse.id;
  const takeOutHandler = async (inventoryId: number) => {
    await dispatch(takeOut(inventoryId));
    await dispatch(getInventory(warehouseId));
  };
  return (
    <View style={styles.inventoryItemBlock}>
      <View>
        <Text text={'name:'} customStyles={commonStyles.propertyDesc} />
        <Text
          text={inventory.item.name}
          customStyles={commonStyles.propertyValue}
        />
      </View>
      <View>
        <Text text={'quantity:'} customStyles={commonStyles.propertyDesc} />
        {inventory.quantity ? (
          <Text
            text={inventory.quantity}
            customStyles={commonStyles.propertyValue}
          />
        ) : (
          <Text text={'Out of stock'} customStyles={styles.quantityText} />
        )}
      </View>
      <View>
        <Text text={'description:'} customStyles={commonStyles.propertyDesc} />
        <Text
          text={inventory.item.desc}
          customStyles={commonStyles.propertyValue}
        />
      </View>
      <Button
        title={'Take out'}
        buttonStyle={styles.takeOutBtn}
        onPress={() => takeOutHandler(inventory.id)}
      />
    </View>
  );
};
