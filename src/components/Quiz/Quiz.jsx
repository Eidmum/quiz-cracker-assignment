import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import IndividualQuestion from "../IndividualQuestion/IndividualQuestion";
import "./Quiz.css";
import { createContext } from "react";
import Dashboard from "../Dashboard/Dashboard";

export const AnsContainer = createContext({});
const Quiz = () => {
  const questionsData = useLoaderData();
  const { id, name, logo, questions } = questionsData;
  const [wrong, setWrong] = useState([]);
  const wrongCounter = (wrongQuestion) => {
    let wrongArray = [...wrong, wrongQuestion];
    setWrong(wrongArray);
  };

  const [correct, setCorrect] = useState([]);
  const correctCounter = (correctQuestion) => {
    let correctArray = [...correct, correctQuestion];
    setCorrect(correctArray);
  };
  console.log(wrong, correct);

  return (
    <div className="quiz row">
      <div className="quiz col-md-8">
        <h1 className="text-center py-5">{name} Questions</h1>

        <AnsContainer.Provider value={{ correctCounter, wrongCounter }}>
          {questions.map((singleQuestion, index) => (
            <IndividualQuestion
              quesNo={index + 1}
              singleQuestion={singleQuestion}
              key={singleQuestion.id}
            ></IndividualQuestion>
          ))}
        </AnsContainer.Provider>
      </div>
      <div className="col-md-4 d-flex flex-column  align-items-center dashboard">
        <Dashboard correct={correct} wrong={wrong}></Dashboard>
      </div>
    </div>
  );
};

export default Quiz;
