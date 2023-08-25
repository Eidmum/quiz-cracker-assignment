import React from "react";
import parse from "html-react-parser";
import "./IndividualQuestion.css";
import Option from "../Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
const IndividualQuestion = ({ singleQuestion, quesNo }) => {
  let { id, question, options, correctAnswer } = singleQuestion;
  const showCorrectAnswer = () => {
    toast(`Correct Answer : ${correctAnswer}`);
  };
  return (
    <div className="top-container ">
      <h3 className="d-flex justify-content-between">
        {parse(question)}
        <EyeIcon onClick={showCorrectAnswer} className="icon text-blue-500" />
      </h3>
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
