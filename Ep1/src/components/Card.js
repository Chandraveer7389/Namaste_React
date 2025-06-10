import {card1} from "../utils/constant";
const Card = (props) =>{
    const {Resname,rating,cuisines} = props.data;
    return (
      <div className="card" style={card1}>
        <img className="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcIsAh7uFrYT0_8DMN1RZY9_m5HguOApqdw&s"/>
        <h3>{Resname}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{rating}</h4>
      </div>
    )
  }
export default Card;  