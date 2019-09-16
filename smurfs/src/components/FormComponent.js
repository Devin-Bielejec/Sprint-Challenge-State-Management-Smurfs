import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormComponent({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" placeholder="name" />
      </div>

      <div>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type="number" name="age" placeholder="age" />
      </div>

      <div>
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field type="text" name="height" placeholder="height" />
      </div>

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikFormComponent = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    age: Yup.number()
      .min(1, "Age minimum is 1"),
    height: Yup.string()
      .required("Height is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(`values going into post are`, values);
    axios
    .post("http://localhost:3333/smurfs", values)
    .then(res => {
        console.log(res); // Data was created successfully and logs to console
        resetForm();
        setSubmitting(false);
    })
    .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
        setSubmitting(false);
    });
    }
})(FormComponent);

export default FormikFormComponent;