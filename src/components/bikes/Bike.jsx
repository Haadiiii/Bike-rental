import ColorSwitch from "../colorSwitch/ColorSwitch";
import { useState } from "react";
import Size from "./Size/Size";
import { useNavigate } from "react-router-dom";
import { useDeleteBikeMutation } from "../api/apiSlice";

const Bike = ({ bike }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(null);
  const [showdetails, setShowDetails] = useState(false);
  const changeColor = (input) => setColor(input);
  const [deleteBike, { isLoading }] = useDeleteBikeMutation();

  return (
    <div>
      <img
        className="img"
        onClick={() => navigate(`/Bikes/${bike.id}`)}
        src={bike.images[color] || bike.images[Object.keys(bike.images)[0]]}
      ></img>
      <h3>{bike.name}</h3>
      <p> {bike.description}</p>
      <Size />
      <div>
        {bike.color.map((color) => (
          <ColorSwitch key={color} changeColor={changeColor} input={color} />
        ))}
      </div>
      <button onClick={(id) => deleteBike(bike.id)}>delete</button>
    </div>
  );
};

export default Bike;
