import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { login } from "../redux/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData));
  };
  const { email, phone, password } = formData;
  return loggedIn ? (
    <Redirect to="/"></Redirect>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
