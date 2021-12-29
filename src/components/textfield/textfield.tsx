import React from "react";
import { useField, ErrorMessage } from "formik";

interface textfieldprops {
  label: string;
  name: string;
  type: string;
}

const Textfield: React.FC<textfieldprops> = ({
  ...props
}: {
  [x: string]: any;
  name: string;
}) => {
  const [field] = useField(props);
  const { label, type } = props;
  console.log(label);
  return (
    <div>
      <label htmlFor={field.name} style={{ display: "block" }}>
        {label}
      </label>
      <input {...props} type={type} {...field}></input>
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default Textfield;
