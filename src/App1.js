import { useState } from "react";
import Child1 from "./components/Child1";
import { Parent1 } from "./components/Parent1";

const App1 = () => {
  const [first, setfirst] = useState(0);

  console.log("App1 renders");
  return (
    <div>
      <Parent1>
        <button onClick={() => setfirst((p) => p + 1)}>click</button>
        <Child1 pc={first}></Child1>
      </Parent1>
    </div>
  );
};

export default App1;
