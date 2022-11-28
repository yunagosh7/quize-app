import '../../assets/styles/Option.css';

export const Option = (props) => {

  console.log(props.correctOption);
  const handleClick = correctOption => {
    
  }

  return (
    <button className={props.class}>
        {props.option}
    </button>
  )
}
