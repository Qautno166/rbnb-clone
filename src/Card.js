import star from "./star.png";

function Card({ img, stars, reviews, place, descr, price }) {
  return (
    <div className="cards">
      <div className="first">
        <img className="katie" src={img} alt="" />
        <div className="rate">
          <img className="star" src={star} alt="" />
          <span>({stars})</span>
          <span>{reviews} ● </span>
          <span>{place}</span>
        </div>
        <h3 className="description">{descr}</h3>
        <h3 className="cost">{price}</h3>
      </div>
    </div>
  );
}
export default Card;
