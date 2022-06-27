import React from "react";
import ReactDOM from "react-dom";
import "./create.css";

const Index = ({ setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
    console.log("modal close");
  };
  return ReactDOM.createPortal(
    <>
      <div className="modal--container">
        <div className="modal">
          <div className="notes--header">
            <p>Create Note</p>
          </div>
          <div className="note--title">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div className="note--details">
            <label htmlFor="details">Enter Details</label>
            <textarea
              name="details"
              placeholder="Give More Information..."
            ></textarea>
          </div>
          <div className="note--categories">
            <fieldset>
              <legend>Choose Category</legend>
              <div className="choose--category">
                <input type="radio" name="category" value="code" id="code" />
                <label htmlFor="code">Code</label>
              </div>
              <div className="choose--category">
                <input
                  type="radio"
                  name="category"
                  value="travel"
                  id="travel"
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="choose--category">
                <input type="radio" name="category" value="life" id="life" />
                <label htmlFor="life">Life</label>
              </div>
              <div className="choose--category">
                <input type="radio" name="category" value="work" id="work" />
                <label htmlFor="work">Work</label>
              </div>
            </fieldset>
          </div>
          <div className="note--buttons">
            <button className="post--button">Post</button>
            <button className="cancel--button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Index;
