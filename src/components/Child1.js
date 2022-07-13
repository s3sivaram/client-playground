import React from "react";

import { useFunc1 } from "./useFunc1";

let Child1 = ({ childrenprop, pc }) => {
  let messageback = useFunc1("first message");

  console.log("child1 renders");

  return (
    <div>
      {/* <h2>Child1</h2> */}
      {messageback}
      <h3>Childrenprop={childrenprop}</h3>
      <h3>pc={pc}</h3>
    </div>
  );
};

export default Child1 = React.memo(Child1);
// export default Child1;
