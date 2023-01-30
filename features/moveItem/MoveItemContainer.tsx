import {ScrollView} from 'react-native';
import {commonStyles} from '../../styles/styles';
import {MoveItemForm} from './components/MoveItemForm/MoveItemForm';

export const MoveItemContainer = () => {
  return (
    <ScrollView style={commonStyles.container}>
      <MoveItemForm />
    </ScrollView>
  );
};
