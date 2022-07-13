import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const menuitems = [
  {
    heading: "Home",
    route: "/home",
    id: 1,
    icon: <HomeTwoToneIcon />,
  },
  {
    heading: "About",
    route: "/about",
    id: 2,
    icon: <ContactMailIcon />,
  },
  {
    heading: "Video",
    route: "/video",
    id: 3,
    icon: <ContactMailIcon />,
  },
  {
    heading: "Ground",
    route: "/ground",
    id: 4,
    icon: <ContactMailIcon />,
  },
  {
    heading: "Ground->Child",
    route: "/ground/childground",
    id: 5,
    icon: <ContactMailIcon />,
  },
  {
    heading: "Chat",
    route: "/chat",
    id: 6,
    icon: <ContactMailIcon />,
  },
];

const Muidrawer = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: 150,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 150,
          boxSizing: "border-box",
          backgroundColor: "lightgrey",
          marginTop: "75px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {/* {["Home", "About", "Send email", "Drafts"].map((text, index) => ( */}
        {menuitems.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>

              <ListItemText
                sx={{
                  backgroundColor:
                    text.route === window.location.pathname ? "darkgrey" : " ",
                }}
                primary={text.heading}
                onClick={() => {
                  navigate(text.route);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Muidrawer;
