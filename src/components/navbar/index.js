import React, { useContext } from "react";
import "./navbar.css";
import { AuthContext } from "../../hooks/contexts/context";
import { Link } from "react-router-dom";
const Index = ({openModal}) => {
  
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.clear();
    //hard reload
    window.location.href = "/login";
  };

  return (
    <nav>
      <h2>Hey, {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</h2>
      <ul>
        <li>
          <Link to = "create"><button className = "nav--button" onClick = {openModal}>Create Post</button></Link>
          {/* <button className="nav--button" onClick={(openModal) => navigate('/create')}>Create Post</button> */}
        </li>
        <li>
          <button className="nav--button" onClick={handleLogout}>
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
