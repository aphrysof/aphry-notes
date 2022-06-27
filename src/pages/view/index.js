import React, { useState, useEffect } from "react";
import { Card, Navbar} from "../../components/Index";
import { Create } from "../Index";

import "./view.css";

const Index = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => err.message);
  }, []);

  // setting state for the modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((showModal) => !showModal)
    console.log ('modal open')
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <div className="card--items">
        {post &&
          post.map((post, id) => (
            <Card key={id} title={post.title} content={post.body} />
          ))}
      </div>
      {showModal ? <Create setShowModal = {setShowModal} /> : null}
    </>
  );
};

export default Index;
