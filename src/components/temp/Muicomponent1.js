import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styles from "./muicomponent1.module.css";

export const Muicomponent1 = () => {
  const navigate = useNavigate();
  const [modalopen, setmodalopen] = useState(false);
  const buttonstyle = {
    // backgroundColor: { xs: "red", sm: "blue", md: "violet" },
    boxShadow: 3,
    margin: "2px auto",
  };
  return (
    <div className={styles.muicomponent1}>
      {/* <Container> */}
      Muicomponent1
      <Button
        variant="text"
        onClick={() => {
          alert("button clicked");
          setmodalopen((prevstate) => !prevstate);
        }}
      >
        Button
      </Button>
      <h1>Modal open: {!modalopen ? "false" : "true"}</h1>
      {/* </Container> */}
      <Stack>
        <Button
          variant="text"
          sx={{
            ...buttonstyle,
            "& .MuiButtonBase-root": { backgroundColor: "red" },
          }}
        >
          Btn1
        </Button>
        <Button sx={{ ...buttonstyle }}> Btn2</Button>
      </Stack>
      {/* <Container> */}
      <TextField
        sx={{
          // "& .MuiFormControl-root": { borderLeftColor: "red" },
          // "& .MuiInputBase-input": { color: "violet" },
          "& .MuiOutlinedInput-input": { color: "violet", border: "red" },
        }}
      ></TextField>
      <p
        onClick={() =>
          navigate("/home", { state: "coming from Mui Component" })
        }
      >
        <b>Click to go Home</b>
      </p>
      <p>
        <Link to="/home">
          <b>Link to Home</b>
        </Link>
      </p>
      {/* </Container> */}
    </div>
  );
};
