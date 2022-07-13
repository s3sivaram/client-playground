import { Button, TextField } from "@mui/material";

const Muibutton = () => {
  return (
    <div>
      <div>
        <Button
          sx={{
            "&:hover": { backgroundColor: "red" },
            "&.MuiButton-root": { color: "violet" },
          }}
          variant="text"
        >
          Muibutton
        </Button>
      </div>
      <div>
        <TextField
          sx={{
            "&.MuiTextField-root": { border: "2px solid red" },
            "& :hover": {
              backgroundColor: "violet",
            },
            color: "violet",
            border: "5px",
            borderColor: "red",
          }}
        >
          This is a text field
        </TextField>
      </div>
      <br></br>
      <div>
        <input type="text" style={{ borderColor: "red" }}></input>
      </div>
    </div>
  );
};

export default Muibutton;
