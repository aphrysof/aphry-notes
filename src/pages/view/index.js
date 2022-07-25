import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Navbar } from "../../components/Index";
import { AuthContext } from "../../hooks/contexts/context";
import { Create } from "../Index";

import "./view.css";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const { userId } = useContext(AuthContext);

  const fetchPost = async () => {
    const res = await fetch(`http://localhost:8000/notes`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (userId) {
      fetchPost().then((data) => {
        setPosts(data);
        // Get a user's posts by id.
        const filtered = data.filter((post) => post.userId === userId);
        setPosts(filtered);
      });
    } else {
      setPosts([]);
    }
    return () => {
      setPosts([]);
    };
  }, [userId]);

  // setting state for the modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((showModal) => !showModal);
    console.log("modal open");
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <div className="card--items">
        {posts &&
          posts.map((post, id) => (
            <Card
              key={id}
              title={post?.title}
              category={
                post?.category.charAt(0).toUpperCase() + post?.category.slice(1)
              }
              content={post?.details}
              avatar={post?.category}
            />
          ))}
      </div>
      {showModal ? <Create setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Index;
