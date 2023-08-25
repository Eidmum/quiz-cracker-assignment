import React from "react";
import { useLoaderData } from "react-router-dom";
import IndividualQuestion from "../IndividualQuestion/IndividualQuestion";
import "./Quiz.css";
const Quiz = () => {
  const questionsData = useLoaderData();
  const { id, name, logo, questions } = questionsData;

  return (
    <div>
      <div className="quiz">
        <h1 className="text-center py-5">{name} Questions</h1>
        {questions.map((singleQuestion, index) => (
          <IndividualQuestion
            quesNo={index + 1}
            singleQuestion={singleQuestion}
            key={singleQuestion.id}
          ></IndividualQuestion>
        ))}
      </div>
      <div>This is correct panel</div>
    </div>
  );
};

export default Quiz;
