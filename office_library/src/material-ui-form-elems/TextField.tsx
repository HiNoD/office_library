import MUTextField, { TextFieldProps } from '@material-ui/core/TextField';
import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

export const TextField: React.SFC<TextFieldProps & FieldRenderProps<any>> = ({
  input: { name, onChange, value, ...restInput },
  label,
  helperText,
  placeholder,
  meta
}) => (
  <MUTextField
    name={name}
    label={label}
    helperText={meta.touched ? meta.error : helperText}
    error={meta.error && meta.touched}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    {...restInput}
  />
);

