import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Welcome to Aphry Notes</h1>
      <h1>
        {/* Navigate to login page for user authentication */}
        Please
        
          <button onClick={() => navigate("login")} className="home--button">
            Login
          </button>
  
        to Continue
      </h1>
    </section>
  );
};

export default Index;
