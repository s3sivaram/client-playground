import React from "react";

const Home = ({ name, place, onClick }) => {
  return (
    <div>
      Home
      <h1>{name}</h1>
      <h1>{place}</h1>
      <button onClick={onClick}> Click</button>
    </div>
  );
};

export default Home;
