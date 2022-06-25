import "./App.css";
import Home from "./components/Home";

function App() {
  function onClick() {
    alert("BUtton clicked");
  }
  return (
    <div className="App">
      <Home name="s3" place="Bodi" onClick={onClick} />
    </div>
  );
}

export default App;
