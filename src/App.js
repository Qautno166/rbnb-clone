import React from "react";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import cards from "./cardData.js";
import Card from "./Card.js";

function App() {
  const cardsElements = cards.map((cards) => {
    return (
      <Card
        key={cards.id}
        img={cards.img}
        stars={cards.stars}
        reviews={cards.reviews}
        place={cards.place}
        descr={cards.descr}
        price={cards.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">{cardsElements} </section>
    </div>
  );
}

export default App;
