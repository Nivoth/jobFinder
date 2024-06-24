import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
const valitionSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!!").required("Email is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name : Yup.string().required("Last Name is required"),
  password1: Yup.string().matches(
    passwordRegex,"Password must contain at least 6 characters, including UPPER/lowercase and numbers"
  )
    .required("Password is required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Password must match!!")
    .required("Password is required"),
});
export default function Register() {
  return (
    <section className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          password1: "",
          password2: "",
        }}
        validationSchema={valitionSchema}
        onSubmit={(values, { setSubmitting , resetForm }) => {
          setSubmitting(false);
          resetForm();
          console.log(values);
        }}
      >
        {({ isSubmitting }) =>{
          console.log("isSubmitting",isSubmitting);
          return (
            <Form className="w-1/2 bg-slate-100 p-10 rounded-lg">
              <h1 className="text-2xl text-blue-800 font-semibold text-center">
                Register
              </h1>
              {/* Email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Email <span className="text-red-600">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-600 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* first name */}
              <div className="mt-5">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter First Name<span className="text-red-600">*</span>
                </label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="first_name">
                  {(msg) => <div className="text-red-600 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* last name */}
              <div className="mt-5">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Last Name<span className="text-red-600">*</span>
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="last_name">
                  {(msg) => <div className="text-red-500 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* password */}
              <div className="mt-5">
                <label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Password <span className="text-red-600">*</span>
                </label>
                <Field
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="password1">
                  {(msg) => <div className="text-red-500 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* confirm password */}
              <div className="mt-5">
                <label
                  htmlFor="password2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Confirm Password <span className="text-red-600">*</span>
                </label>
                <Field
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="password2">
                  {(msg) => <div className="text-red-500 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* disable btn */}
              {
                
                isSubmitting ?<div className="flex justify-end mt-5">
                  <button
                  type="button"
                  className=" text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  Disabled button
                </button>
                  </div>
                :
              <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
              }
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
