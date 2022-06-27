import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../hooks/contexts/context";

const Index = () => {
  //set state
  const [users, setUsers] = useState([]);
  //useNaviget always return a function
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate();

  //fetch users
  const serverUsers = async () => {
    const response = await fetch(" http://localhost:8000/users");
    const data = await response.json();
    return data;
  };
  //call the function and set state to the data fetched
  useEffect(() => {
    let res = true;
    serverUsers()
      .then((data) => {
        if (res) {
          setUsers(data);
        } else {
          return (res = false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    //finding the user

    const found = users.find(
      user => {
        return user.username === username.value.toLowerCase() && user.password === password.value
      }
      // return el.email === email && el.password === password;
    );
    //finding the password

    // const checkPassword = users.find(
    //   user => user.password === password.value.toLowerCase()
    // );
    //so if found is true set the item and save it to localstorage else throw error
    if (found) {
      //persisting the data;
      localStorage.setItem("user", JSON.stringify(found));
      setUser(found);
      navigate("/view")
      // console.log("Hooray");
    } else {
      const error = found 
        ? "Password is incorrect"
        : "Username does not exist";
      alert(error);
      // console.log("fail");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form--header">
        <p>LOGIN</p>
      </div>
      <div className="input--form">
        <label htmlFor="username">Username</label>
        <input type="username" name="username" required />
      </div>
      <div className="input--form">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
      </div>
      <div className="button--div">
        <button className="form--button">Login</button>
      </div>
      <div className="input--text">
        <p>
          Don't have an account{" "}
          <span>
            <button
              className="navigation--button"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </span>
        </p>
      </div>
    </form>
  );
};

export default Index;
