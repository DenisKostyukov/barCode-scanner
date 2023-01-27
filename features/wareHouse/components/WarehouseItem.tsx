import React, {FC} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {WareHouseType} from '../../../types/wareHouse.type';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../../../types/stack.type';
import {Screens} from '../../../enum/screens.enum';
type WarehouseItemProps = {
  warehouse: WareHouseType;
};
export const WarehouseItem: FC<WarehouseItemProps> = ({warehouse}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(Screens.INVENTORY, {warehouse: warehouse})
      }>
      <View style={styles.warehouseBlock}>
        <View>
          <Text text={'name:'} customStyles={styles.propertyDesc} />
          <Text text={warehouse.name} customStyles={styles.propertyValue} />
        </View>
        <View>
          <Text text={'description:'} customStyles={styles.propertyDesc} />
          <Text text={warehouse.desc} customStyles={styles.propertyValue} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
