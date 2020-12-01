import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

const Navbar = () => {
  return (
      <>
    <Box component="div">
        <Avatar src={coolpic} alt="pic of me" />

    </Box>
    
    <Box component="nav">
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar>
          <IconButton>
            <ArrowBack style={{ color: "lightGrey" }} />
          </IconButton>
          <Typography variant="h5" style={{ color: "lightGrey" }}>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Navbar;
