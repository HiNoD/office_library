import * as React from 'react';

import { Field, Form} from 'react-final-form';

import { Grid, Paper } from '@material-ui/core'

const onSubmit = async (values:any) => {
  // await sleep(300)
  window.alert(JSON.stringify(values, null, 2))
}

export class AddingUserForm extends React.Component {
  public render() {
    return (
      <Form
        onSubmit={onSubmit} // tslint:disable-next-line: jsx-no-lambda
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
          
            <Paper style={{ padding: 16 }}>
              <Grid item={true} xs={12}>
                <Field 
                margin=""
                fullWidth={true}
                required={true}
                name="lastName"
                component="input"
                type="text"
                placeholder="Фамилия" 
                />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="name" component="input" placeholder="Имя" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="patronymic" component="input" placeholder="Отчество" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="position" component="input" placeholder="Должность"  />
              </Grid>
              <button type="submit" disabled={submitting || pristine}>
                +Создать
              </button>
            </Paper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      
      />
    );
  } 
};
