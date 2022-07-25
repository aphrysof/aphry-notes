import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/contexts/context";
import "./create.css";

const Index = ({ setShowModal }) => {
  const { user } = useContext(AuthContext);

  const [notes, setNotes] = useState({
    title: "",
    details: "",
    userId: user.id,
    category: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNotes({
      ...notes,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/view");
    console.log("modal close");
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
       fetch("http://localhost:8000/notes", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(notes),
       })
         .then((res) => res.json())
         .then((data) => setNotes(data));
      console.log(notes);
      setShowModal(false)
      window.location.reload(false); 
      navigate('/view')

  }
  return ReactDOM.createPortal(
    <>
      <div className="modal--container">
        <div className="modal">
          <div className="notes--header">
            <p>Create Note</p>
          </div>
          <div className="note--title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={notes.title}
              onChange={handleChange}
            />
          </div>
          <div className="note--details">
            <label htmlFor="details">Enter Details</label>
            <textarea
              name="details"
              placeholder="Give More Information..."
              value={notes.details}
              onChange={handleChange}
            />
          </div>
          <div className="note--categories">
            <fieldset>
              <legend>Choose Category</legend>
              <div className="choose--category">
                <input
                  type="radio"
                  name="category"
                  value="code"
                  id="code"
                  checked={notes.category === "code"}
                  onChange={handleChange}
                />
                <label htmlFor="code">Code</label>
              </div>
              <div className="choose--category">
                <input
                  type="radio"
                  name="category"
                  value="travel"
                  id="travel"
                  checked={notes.category === "travel"}
                  onChange={handleChange}
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="choose--category">
                <input
                  type="radio"
                  name="category"
                  value="life"
                  id="life"
                  checked={notes.category === "life"}
                  onChange={handleChange}
                />
                <label htmlFor="life">Life</label>
              </div>
              <div className="choose--category">
                <input
                  type="radio"
                  name="category"
                  value="work"
                  id="work"
                  checked={notes.category === "work"}
                  onChange={handleChange}
                />
                <label htmlFor="work">Work</label>
              </div>
            </fieldset>
          </div>
          <div className="note--buttons">
            <button className="post--button" type="submit" onClick={handleSubmit}>Post</button>
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
