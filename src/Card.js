import star from "./star.png";
import React from "react";

function Card(props) {
  return (
    <div className="all">
      <img className="katie" src={props.img} alt="" />
      <div className="rate">
        <img className="star" src={star} alt="" />
        <span>({props.stars})</span>
        <span>{props.reviews} ● </span>
        <span>{props.place}</span>
      </div>
      <h3 className="description">{props.descr}</h3>
      <h3 className="cost">{props.price}</h3>
    </div>
  );
}
export default Card;
