import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./ground.css";

/*
function Tempcomponent({ title, setTitle }) {
  // prop, name, id, default1 = "def"
  if (title === "old title") {
    let c = "old title is" + title + " so changed to a new one";
    setTitle("new title");
    return c;
  } else {
    return "no it's a new Title";
  }
}
*/
const Ground = () => {
  const [time, setTime] = useState(0);
  // const [title, setTitle] = useState("old title");
  const [disablestart, setDisablestart] = useState(false);

  const list = [1, 2, 3];
  console.log("parent ground render");

  async function asyncawait() {
    var request = new Request("http://www.s3.com", {
      method: "POST",
      body: '{ "foo": "1", "bar": 2 }',
    });
    console.log(request);
    request.json().then(function (json) {
      console.log(json);
      // console.log(json.foo);
      // console.log(json.bar);
    });
  }

  let id = useRef(0);
  if (time === 4) {
    setTime(0);
    setDisablestart(false);
  }

  function timer() {
    setTime((prev) => prev + 1);
  }

  function start() {
    id.current = setInterval(timer, 1000);
    setDisablestart(true);
  }
  function stop() {
    clearInterval(id.current);
    // setTime(0);
    setDisablestart(false);
  }

  return (
    <div className={"container"}>
      Ground
      <br></br>
      <h3> environment var={process.env.REACT_APP_ENV1}</h3>
      {/* <Tempcomponent title={title} setTitle={setTitle}>
        this is Temp component
      </Tempcomponent> */}
      <div>{time}</div>
      <button
        disabled={disablestart}
        onClick={() => {
          start();
          asyncawait();
        }}
      >
        start
      </button>
      <button onClick={() => stop()}>stop</button>
      {list.map((e, i) => {
        if (e === time) {
          return (
            <div key={i} className={"itemactive"}>
              Item - {i}
            </div>
          );
        } else {
          return <div key={i}>Item - {i}</div>;
        }
      })}
      <hr></hr>
      <Outlet></Outlet>
      <hr></hr>
    </div>
  );
};

export default Ground;
