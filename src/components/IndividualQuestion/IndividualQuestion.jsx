import React from "react";
import parse from "html-react-parser";
import "./IndividualQuestion.css";
import Option from "../Option/Option";
const IndividualQuestion = ({ singleQuestion, quesNo }) => {
  let { id, question, options, correctAnswer } = singleQuestion;

  return (
    <div className="top-container ">
      <h3 className="">{parse(question)}</h3>
      <div className="options row">
        {options.map((option, index) => (
          <Option
            key={index}
            correctAnswer={correctAnswer}
            option={option}
            index={index + 1}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default IndividualQuestion;
