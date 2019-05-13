import * as React from "react";

import { Field, Form} from 'react-final-form';

import { Grid, Paper } from '@material-ui/core'

import {TextField} from 'final-form-material-ui';

const sleep = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values:any) => {
  await sleep(300)
  window.alert(JSON.stringify(values, null, 2))
}

export default class AddingBookForm extends React.Component {
  public render() {
    return (
      <Form
        onSubmit={onSubmit} // tslint:disable-next-line: jsx-no-lambda
        render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                <Field name="title" component={TextField} placeholder="Название книги" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="author" component="input" placeholder="Автор" />
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="position" component="textarea" placeholder="Описание"  />
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      
      />
    );
  } 
};