import { Tab, Tabs } from "@mui/material";
import React from "react";
import styles from "./home.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Home = ({ name }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      {/* <AppBar> */}
      <Tabs>
        <Tab label="Mui" onClick={() => navigate("/mui")}></Tab>
        <Tab label="Admin" onClick={() => navigate("/admin")}></Tab>
      </Tabs>
      {/* </AppBar> */}

      <div className={styles.box}>
        <div className={styles.image}></div>
      </div>
      <div>{location.state}</div>
    </div>
  );
};

export default Home;
