import React from "react";
import "./card.css";

const Index = (props) => {
  return (
    <div className="card--body">
      <div className="card--title">
        <h3>{props.title}</h3>
      </div>
      <div className="card--content">
        <p>
         {props.content}
        </p>
      </div>
    </div>
  );
};

export default Index;
