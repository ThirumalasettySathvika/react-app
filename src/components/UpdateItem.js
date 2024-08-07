import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UpdateItem = ({ item }) => {
  return (
    <div className="container">
      <h1>Update Item</h1>
      <Formik
        initialValues={{ name: item.name, price: item.price }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          price: Yup.number().required('Required').positive('Must be positive'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetch(`http://localhost:3000/items/${item.id}`, {
            method: 'PUT',
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

          <button type="submit">Update Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateItem;
