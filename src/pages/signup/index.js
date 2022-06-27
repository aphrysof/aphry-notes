import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signup.css";

const Index = () => {
  // update state from users input

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/users", { 
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // TODO pass in a second argument of replace so that a user can't navigate back
    navigate("/login", { replace: true });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form--header">
        <p>SIGN UP</p>
      </div>
      <div className="input--form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input--form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input--form">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button--div">
        <button className="form--button">Sign up</button>
      </div>
    </form>
  );
};

export default Index;
