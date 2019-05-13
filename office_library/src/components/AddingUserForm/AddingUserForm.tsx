import * as React from 'react';

import { Field, Form} from 'react-final-form';

import { Grid, Paper} from '@material-ui/core'

import {TextField} from 'src/material-ui-form-elems/TextField'

const onSubmit = async (values:any) => {
  // await sleep(300)
  window.alert(JSON.stringify(values, null, 2))
}

export class AddingUserForm extends React.Component {
  public render() {
    return (
      <Form
        onSubmit={onSubmit} // tslint:disable-next-line: jsx-no-lambda
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-end new-book-button" >
              <div className="col-3">
                <button type="submit" className="btn btn-success" disabled={submitting || pristine}>
                    +Создать
                </button>
              </div>
            </div>
            
            <Paper style={{ padding: 16 }}>
              <Grid item={true} xs={12}>
                <Field 
                margin=""
                name="lastName"
                component={TextField}
                type="text"
                placeholder="Фамилия" 
                />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="name" component={TextField} placeholder="Имя" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="patronymic" component={TextField} placeholder="Отчество" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="position" component={TextField} placeholder="Должность"  />
              </Grid>
             
            </Paper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      
      />
    );
  } 
};
