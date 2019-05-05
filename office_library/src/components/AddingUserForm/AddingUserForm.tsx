import * as React from "react";
import { Field, Form } from 'react-final-form';

const onSubmit = async (values:any) => {
  // await sleep(300)
  window.alert(JSON.stringify(values, null, 2))
}

export const AddingUserForm: React.SFC = () => {
  return (
    <Form
      onSubmit={onSubmit} // tslint:disable-next-line: jsx-no-lambda
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
        
          <div>
            <Field name="lastName" component="input" placeholder="Фамилия" />
            <Field name="name" component="input" placeholder="Имя" />
            <Field name="patronymic" component="input" placeholder="Отчество" />
            <Field name="position" component="input" placeholder="Должность"  />
            <button type="submit" disabled={submitting || pristine}>
              +Создать
            </button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    
    />
  );
};