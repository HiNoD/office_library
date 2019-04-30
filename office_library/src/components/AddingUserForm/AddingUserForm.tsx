import * as React from "react";
import { Field } from "../FormElements/Field/Field";
import { Form } from "../FormElements/Form/Form";

export const AddingUserForm: React.SFC = () => {
  return (
    <Form
      action=""
// tslint:disable-next-line: jsx-no-lambda
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>
          <Field id="lastName" label="Фамилия" />
          <Field id="name" label="Имя" />
          <Field id="patronymic" label="Отчество" />
          <Field id="position" label="Должность" />
        </React.Fragment>
      )}
    />
  );
};