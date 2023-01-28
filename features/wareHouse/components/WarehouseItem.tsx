import React, {FC} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {WareHouseType} from '../../../types/wareHouse.type';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../../../types/stack.type';
import {Screens} from '../../../enum/screens.enum';
import {commonStyles} from '../../../styles/styles';
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
          <Text text={'name:'} customStyles={commonStyles.propertyDesc} />
          <Text
            text={warehouse.name}
            customStyles={commonStyles.propertyValue}
          />
        </View>
        <View>
          <Text
            text={'description:'}
            customStyles={commonStyles.propertyDesc}
          />
          <Text
            text={warehouse.desc}
            customStyles={commonStyles.propertyValue}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
