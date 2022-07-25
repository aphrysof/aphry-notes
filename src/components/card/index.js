import axios from "axios";
import React, {useState, useEffect} from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./card.css";


const Index = (props) => {
  const styles = {
    avatar: {
      backgroundColor: "#ca82ff",
    },
  };
  const [deletenotes, setDeleteNotes] = ([]);

  const handleDelete = () => {


    //first fetch notes by id
    //then set state 
    //user array.filter which will call each element in an array
    //on the iteration we check if the id property of the object is not equal to the id we'll pass and return the result 
  }

  return (
    <div className="card--body">
      <div className="card--title">
        <div className="avatar" style={styles.avatar}>
          <p>{props?.avatar[0].toUpperCase()}</p>
        </div>
        <div className="title">
          <p className="header">{props?.title}</p>
          <p className="category">{props?.category}</p>
        </div>
        <div className="delete">
          <button onClick={handleDelete}>
            <AiOutlineDelete size={24} />
          </button>
        </div>
      </div>
      <div className="card--content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Index;
