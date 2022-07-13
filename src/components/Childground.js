import { useState } from "react";

const Childground = () => {
  const [first, setfirst] = useState(0);
  console.log("child render");

  return (
    <div>
      <h2>Childground - {first}</h2>
      <button onClick={() => setfirst(first + 1)}>click</button>
      <button onClick={() => setfirst(3)}>click to 3</button>
    </div>
  );
};

export default Childground;
