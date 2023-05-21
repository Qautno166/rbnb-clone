import React from "react";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import katie from "./katie.png";
import wedding from "./weeding.png";
import bike from "./bike.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <cards>
        <Card
          img={katie}
          stars="5.0"
          reviews="6"
          place="USA"
          descr="Life lessons with Katie Zaferes"
          price="From $136 / person"
        />
        <Card
          img={wedding}
          stars="5.0"
          reviews="30"
          place="USA"
          descr="Learn wedding photography"
          price="From $125 / person"
        />
        <Card
          img={bike}
          stars="4.8"
          reviews="2"
          place="USA"
          descr="Group Mountain Biking"
          price="From $50 / person"
        />
      </cards>
    </div>
  );
}

export default App;
