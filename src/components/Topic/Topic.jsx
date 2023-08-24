import React from "react";
import "./Topic.css";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="topic">
      <div className="col">
        <div className="card p-3">
          <img src={logo} className="card-img-top " alt="..." />
          <div className="card-body d-flex justify-content-between align-items-center ">
            <h5 className="card-title">{name}</h5>
            <button type="button" className="btn btn-primary">
              Attempt Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
