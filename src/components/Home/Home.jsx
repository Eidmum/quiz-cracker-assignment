import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
const Home = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div className="header">
      <div className="card text-bg-dark">
        <img src="quiz.jpg" className="card-img img-fluid" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          {/* <h5 className="card-title text-primary">Moodle</h5> */}
          <p className="card-text">
            Moodle is a widely used open-source learning management system (LMS)
            or e-learning platform.
          </p>
        </div>
      </div>
      <div className="topics row row-cols-1 row-cols-md-3 g-4 container">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
