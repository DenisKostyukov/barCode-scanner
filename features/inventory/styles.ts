import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inventoryListBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inventoryItemBlock: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 10,
    marginHorizontal: 'auto',
    padding: 10,
    borderRadius: 15,
  },
  addItemBtn: {
    marginBottom: 15,
  },
  takeOutBtn: {
    marginTop: 15,
    width: '50%',
    marginHorizontal: '25%',
  },
  quantityText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
});
