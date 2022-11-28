import React from "react";
import '../../assets/styles/Question.css'


export const Question = (props) => {
  return (
    <div className="question">
      {props.question}
    </div>
  );
};
