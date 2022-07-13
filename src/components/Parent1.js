import "./parent1.css";
import balls from "../assets/balls.jpg";
import wall from "../assets/wall.jpg";
import { useState } from "react";

export const Parent1 = ({ children, pc }) => {
  const [list, setlist] = useState([
    "item1",
    "item2",
    "item3",
    "i",
    "am",
    "how",
  ]);
  const [displaylist, setDisplaylist] = useState([]);

  function displayfn(char) {
    console.log(char);
    setDisplaylist(list.filter((l) => l.includes(char) && l));
  }
  return (
    <div className="bigbox">
      <div className="leftbox">
        <div className="namebox">
          <div className="name"> S3 </div>
          <div className="title">
            <div className="wrapper">
              <div className="item">Programmer</div>
              <div className="item">Designer</div>
              <div className="item">Catalyst</div>
            </div>
          </div>
        </div>
        <div className="otherleftbox"></div>
      </div>
      <div className="rightbox">
        <div className="righttopbox">
          <div className="img-container">
            <img className="front " src={balls} alt="" />
            <img className={"back".concat(" tilt")} src={wall} alt="" />
          </div>
          <div className="label">
            <span className="text">testsafldkfds text</span>
          </div>
        </div>
        <div className="rightbottombox">
          RB box1
          <div>
            <input type="text" onChange={(e) => displayfn(e.target.value)} />
          </div>
          <div>
            {displaylist.map((el) => (
              <div key={Math.random()}>{el}</div>
            ))}
          </div>
        </div>
        <div className="rightbottombox">RB box2</div>
        <div className="rightbottombox">RB box3</div>
      </div>
    </div>
  );
};
