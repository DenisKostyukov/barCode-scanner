import * as yup from 'yup';

const nameSchema = yup.string().required('Name is required');
const descSchema = yup.string().required('Desc is required');
const quantitySchema = yup
  .string()
  .required('Quantity is required')
  .matches(/^[0-9\.]+[0-9]{0,4}$/, 'Max decimal places 4');

const warCodeSchema = yup.string().required('Code is required');
const senderSchema = yup.number().min(1, 'Sender is required');
const itemSchema = yup.number().min(1, 'Item is required');
const recipientSchema = yup.number().min(1, 'Recipient is required');

export const addItemSchema = yup.object().shape({
  name: nameSchema,
  desc: descSchema,
  quantity: quantitySchema,
  warCode: warCodeSchema,
});
export const addWarehouseSchema = yup.object().shape({
  name: nameSchema,
  desc: descSchema,
});

export const moveItemSchema = yup.object().shape({
  senderId: senderSchema,
  itemId: itemSchema,
  recipientId: recipientSchema,
});
