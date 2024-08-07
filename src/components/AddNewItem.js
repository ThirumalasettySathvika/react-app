import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNewItem = () => {
  return (
    <div className="container">
      <h1>Add New Item</h1>
      <Formik
        initialValues={{ name: '', price: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          price: Yup.number().required('Required').positive('Must be positive'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }).then(() => {
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;
