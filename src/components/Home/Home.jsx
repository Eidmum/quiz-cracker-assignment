import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="header">
      <div className="card text-bg-dark">
        <img src="quiz.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">Moodle</h5>
          <p className="card-text">
            Moodle is a widely used open-source learning management system (LMS)
            or e-learning platform.
          </p>
          <p className="card-text">
            <button type="button" className="btn btn-secondary">
              Explore
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
