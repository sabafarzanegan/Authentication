import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [response, setResponse] = useState([]);
  const loginSubmit = async (e) => {
    e.preventDefault();
    axios.get("http://localhost:8000/user").then((res) => {
      res.data.map((user) => {
        if (user.pass === pass && user.email === email) {
          alert("login success");
        }
      });
    });
  };

  return (
    <div>
      <form action="" onSubmit={loginSubmit}>
        <label htmlFor="">ایمیل</label>
        <input
          type="email"
          placeholder="email"
          name=""
          id=""
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>رمز عبور</label>
        <input
          placeholder="password"
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;
