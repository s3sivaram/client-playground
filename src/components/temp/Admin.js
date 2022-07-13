// import TemporaryDrawer from "./Drawer";
import styles from "./admin.module.css";
import { Button, Modal, Box, Typography, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Admin = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className={styles.box}>
      <div className={styles.sidebar}>
        {/* Side Bar */}
        {/* <TemporaryDrawer /> */}
        <Button onClick={handleOpen}> Click to open modal</Button>
        <Tabs>
          <Tab label="Mui" onClick={() => navigate("/mui")}></Tab>
          <Tab label="Home" onClick={() => navigate("/home")}></Tab>
        </Tabs>
      </div>
      <div className={styles.mainpanel}>
        Main Panel
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This is the text of the modal
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Admin;
