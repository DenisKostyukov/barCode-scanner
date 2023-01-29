export type FormFieldType = {
  placeholder?: string;
  label?: string;
  type: string;
  name: string;
  disabled?: boolean;
};
export const fields: FormFieldType[] = [
  {
    placeholder: 'Name',
    name: 'name',
    type: 'input',
  },
  {
    placeholder: 'Description',
    name: 'desc',
    type: 'input',
  },
  {
    placeholder: 'Code',
    name: 'warCode',
    type: 'input',
  },
  {
    placeholder: 'Quantity',
    name: 'quantity',
    type: 'input',
  },
];
