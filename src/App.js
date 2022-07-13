import { Toolbar, Typography, AppBar } from "@mui/material";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Home";
import Video from "./Video";
import About from "./About";
import Muidrawer from "./components/Muidrawer";
import { appbarStyle } from "./definecss";
import Ground from "./Ground";
import Childground from "./components/Childground";
import Chat from "./components/Chat";
import Success from "./pages/Success";
import Fail from "./pages/Fail";

function App() {
  // let appbarStyle = {
  //   display: { xs: "none", md: "block" },
  // };

  return (
    <Router>
      <div>
        <AppBar sx={{ ...appbarStyle }}>
          <Toolbar>
            <Typography
              sx={{ marginLeft: "500px" }}
              variant="h2"
              noWrap
              component="div"
            >
              The Store
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.panel}>
        <div>{<Muidrawer />}</div>
        <div className={styles.mainpanel}>
          <Routes>
            <Route path="/home" element={<Home name="Home" />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/video" element={<Video />} />
            <Route path="/ground" element={<Ground />}>
              <Route path="childground" element={<Childground />}></Route>
            </Route>
            <Route path="/" element={<Home name="Home" />} />
            <Route path="/payment/success" element={<Success />} />
            <Route path="/payment/fail" element={<Fail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
