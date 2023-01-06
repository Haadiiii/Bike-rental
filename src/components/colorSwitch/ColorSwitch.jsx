import { useDispatch } from "react-redux"
import {colorSwitched} from './colorSwitch';

const ColorSwitch = ({input}) => {
  const dispatch = useDispatch()
  let color;
  switch(input) {
    case "red":
      color = "red"
      break;
    case "white":
      color =  "white"
      break;
    case "green":
      color =  "green"
    break;
    case "yellow":
      color = "yellow"
      break;
    case "orange":
      color = "orange"
      break;
    case "blue":
      color = "blue"
      break;
    case "green":
      color = "green"
    break;
    default:
      color = "black"
  }  
  return (
      <button style={{backgroundColor:color}} onClick={() => dispatch(colorSwitched(color))} >switch</button>
  )
}

export default ColorSwitch
