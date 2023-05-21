import heros from "./heros.JPG";
function Hero() {
  return (
    <hero>
      <div>
        <img className="heros" src={heros} alt=""></img>
      </div>
      <h1 className="online-exp">Online Experiences</h1>
      <h3 className="online-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h3>
    </hero>
  );
}

export default Hero;
