import * as React from "react";
 
/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown";
 
export interface IFieldProps {
  /* The unique field name */
  id: string;
 
  /* The label text for the field */
  label?: string;
 
  /* The editor for the field */
  editor?: Editor;
 
  /* The drop down items for the field */
  options?: string[];
 
  /* The field value */
  value?: any;
}
 
export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
 
      {editor!.toLowerCase() === "textbox" && (
        <input
          id={id}
          type="text"
          value={value}
          onChange={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLInputElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLInputElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        />
      )}
 
      {editor!.toLowerCase() === "multilinetextbox" && (
        <textarea
          id={id}
          value={value}
          onChange={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLTextAreaElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLTextAreaElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        />
      )}
 
      {editor!.toLowerCase() === "dropdown" && (
        <select
          id={id}
          name={id}
          value={value}
          onChange={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLSelectElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
// tslint:disable-next-line: jsx-no-lambda
            (e: React.FormEvent<HTMLSelectElement>) =>
// tslint:disable-next-line: no-console
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        >
          {options &&
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )}
 
      {/* TODO - display validation error */}
    </div>
  );
};
Field.defaultProps = {
  editor: "textbox"
};