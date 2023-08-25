import React from "react";
import "./Dashboard.css";
const Dashboard = ({ correct, wrong }) => {
  return (
    <div className="p-5 text-primary">
      <h2>Right/Wrong dashboard</h2>
      <h3>Total Answered : {correct.length + wrong.length}</h3>
      <h4>Total correct Answer : {correct.length}</h4>
      <h4>Total wrong Answer : {wrong.length}</h4>
    </div>
  );
};

export default Dashboard;
