import { Option } from "./subcompents/Option.jsx";
import "../assets/styles/Options.css";

export const Options = (props) => {
console.log(props.options.options.option1)
  return (
    <div className="options-container">
      <Option class="option" correctOption={props.options.correctOption} option={props.options.options.option1} />
      <Option class="option" correctOption={props.options.correctOption} option={props.options.options.option2} />
      <Option class="option" correctOption={props.options.correctOption} option={props.options.options.option3} />
      <Option class="option" correctOption={props.options.correctOption} option={props.options.options.option4} />
    </div>
  );
};
