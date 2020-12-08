import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";

import coolpic from "../coolpic.jpg";
import zIndex from "@material-ui/core/styles/zIndex";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    background: "rgba(38,50,56,0.5)",
    borderRadius: 5,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={coolpic} alt="pic of me" />
      </Grid>
      <Typography className={classes.title} variant="h3">
      Joe Schlick
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        MERN Stack Web Developer
      </Typography>
    </Box>
  );
};

export default Header;
