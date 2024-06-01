import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-center mt-5  font-lale font-bold text-xl">
        فرم ثبت نام
      </h2>
      <div
        id="back-div"
        className="mt-12 p-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 ">
        <div className="md:w-[60%] m-auto  border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
            Sign Up
          </h1>
          <Formik
            validate={(values) => {
              const errors = {};
              if (values.username === "") {
                errors.username = "نام کاربری را وارد کنید.";
              }
              if (values.email === "") {
                errors.email = "ایمیل را واردکنید";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "ایمیل معتبر نیست";
              }
              if (values.password === "") {
                errors.password = "رمز را وارد کنید";
              }
              return errors;
            }}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post("http://localhost:8000/user", values)
                .then((res) => console.log(res));
              navigate("/login");
              setTimeout(() => {
                setSubmitting(false);
              }, 3000);
            }}
            action="#"
            method="post"
            className="space-y-4">
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form>
                {console.log(errors)}
                <div>
                  <label
                    for="name"
                    className="mb-2 font-vazir dark:text-gray-400 text-lg">
                    نام کاربری
                  </label>
                  <Field
                    placeholder="name"
                    id="name"
                    name="username"
                    type="text"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-600 font-vazir font-medium"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="mb-2 font-vazir dark:text-gray-400 text-lg">
                    ایمیل
                  </label>
                  <Field
                    placeholder="email"
                    id="email"
                    type="email"
                    name="email"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-600 font-vazir font-medium"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="mb-2 font-vazir dark:text-gray-400 text-lg">
                    رمز عبور
                  </label>
                  <Field
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-600 font-vazir font-medium"
                  />
                </div>
                <button
                  className={` font-vazir text-lg  font-semibold bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out`}
                  type="submit">
                  {isSubmitting ? "درحال ارسال" : "ثبت نام"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span className="font-vazir text-xl cursor-default dark:text-gray-300">
                حساب کاربری دارید؟
              </span>
              <Link
                to="/login"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#">
                <span className="text-xl px-1  bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  ورود
                </span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
