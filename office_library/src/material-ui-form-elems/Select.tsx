  import MenuItem from '@material-ui/core/MenuItem';
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField';
import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { FieldRenderProps } from 'react-final-form';

//  import { Suggestion } from '../types';

export interface ISelectProps extends BaseTextFieldProps {
  suggestions: any[];
  label: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  helperText?: string;
  validation: object;
}

const Select: React.SFC<ISelectProps & FieldRenderProps<any>> = ({
  input: { name, onChange, value, ...restInput },
  label,
  helperText,
  suggestions
}) => {
  return (
    <TextField
      fullWidth={true}
      select={true}
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      {...restInput}
    >
      {suggestions.map(suggestion => (
        <MenuItem key={suggestion.value} value={suggestion.value}>
          {suggestion.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export { Select };