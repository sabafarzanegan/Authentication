import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8000/user").then((res) => {
      res.data.map((user) => {
        if (user.email === email && user.password === pass) {
          console.log("success");
          navigate("/");
        } else if (user.email != email || user.password !== pass) {
          console.log("wrong pass or email");
        }
      });
    });
  };

  return (
    <div>
      <h2 className="text-center mt-5  font-lale font-bold text-xl">
        فرم ورود
      </h2>
      <div
        id="back-div"
        className="mt-12 p-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 ">
        <div className="md:w-[60%] m-auto  border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
            Log In
          </h1>

          <form onSubmit={loginSubmit}>
            <div>
              <label
                for="email"
                className="mb-2 font-vazir dark:text-gray-400 text-lg">
                ایمیل
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="email"
                id="email"
                type="email"
                name="email"
                className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              />
            </div>
            <div>
              <label
                for="password"
                className="mb-2 font-vazir dark:text-gray-400 text-lg">
                رمز عبور
              </label>
              <input
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="password"
                id="password"
                name="password"
                type="password"
                className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              />
            </div>
            <button
              className={` font-vazir text-lg  font-semibold bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out`}
              type="submit">
              ورود
            </button>
          </form>

          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span className="font-vazir text-xl cursor-default dark:text-gray-300">
                حساب کاربری ندارید؟
              </span>
              <Link
                to="/signup"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#">
                <span className="text-xl px-1  bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  ثبت نام
                </span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
