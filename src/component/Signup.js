import React from "react";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(" http://localhost:8000/user", { name, email, pass })
      .then((res) => console.log("register success"));
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          value={name}
          placeholder="name"
          type="text"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          id="email"
          placeholder="email"
          type="email"
          name=""
        />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          placeholder="pass"
          value={pass}
          type="password"
          name=""
          id="pass"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Signup;
