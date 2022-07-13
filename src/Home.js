import "./home.css";
import { mobtext } from "./definecss";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1>Company1</h1>
        <button className="menubutton">
          <div className="menuicon"></div>
        </button>
      </div>
      <ul className="items">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
      <div>
        <Typography sx={{ ...mobtext }}>
          This will display only in mobile
        </Typography>
      </div>
    </div>
  );
};

export default Home;
