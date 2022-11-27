import { Option } from "./subcompents/Option.jsx"
import '../assets/styles/Options.css';

export const Options = () => {
  return (
    <div className="options-container">
      <Option class="option"  />
      <Option class="wrong" />
      <Option class="option" />
      <Option class="correct" />

    </div>
  )
}
