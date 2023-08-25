import React, { useContext, useState } from "react";
import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnsContainer } from "../Quiz/Quiz";

const Option = ({ option, index, correctAnswer }) => {
  const { correctCounter, wrongCounter } = useContext(AnsContainer);

  const [css, setCss] = useState({});
  const correctStyle = {
    backgroundColor: "green",
    color: "black",
    fontWeight: 900,
  };
  const wrongStyle = {
    backgroundColor: "red",
    color: "black",
    fontWeight: 900,
  };

  const ansCheker = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setCss(correctStyle);
      toast("Answer is correct");
      correctCounter(selectedAnswer);
    } else {
      setCss(wrongStyle);
      toast("Answer is wrong");
      wrongCounter(selectedAnswer);
    }
  };

  return (
    <div
      className="option col-md-5 d-flex justify-content-center align-items-center"
      onClick={() => {
        ansCheker(option);
      }}
      style={css}
    >
      <p>
        <span>{index + ". "}</span>
        {option}
      </p>
      <ToastContainer />
    </div>
  );
};

export default Option;
