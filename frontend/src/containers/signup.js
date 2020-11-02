import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signup } from "../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signup(formData));
  };
  const signedUp = useSelector((state) => state.auth.signedUp);
  const { full_name, username, email, phone, password, password2 } = formData;
  return signedUp ? (
    <Redirect to="/login"></Redirect>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          required
          id="full_name"
          name="full_name"
          value={full_name}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          required
          id="username"
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
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
        <label htmlFor="email">Phone</label>
        <input
          type="text"
          required
          id="phone"
          name="phone"
          value={phone}
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
      <div>
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          required
          id="password2"
          name="password2"
          value={password2}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
