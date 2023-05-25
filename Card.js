import star from "./star.png";
import React from "react";

function Card(props) {
  console.log(props);
  let bagetext;
  if (props.openSpots === 0) {
    bagetext = "SOLD OUT";
  } else if (props.location === "Online") {
    bagetext = "ONLINE";
  }
  console.log(bagetext);
  return (
    <div className="all">
      {bagetext && <div className="badge">{bagetext}</div>}
      <img className="katie" src={props.items.img} alt="" />
      <div className="rate">
        <img className="star" src={star} alt="" />
        <span>({props.items.stars})</span>
        <span>{props.items.reviews} ● </span>
        <span>{props.items.place}</span>
      </div>
      <h3 className="description">{props.items.descr}</h3>
      <h3 className="cost">{props.items.price}</h3>
    </div>
  );
}
export default Card;
