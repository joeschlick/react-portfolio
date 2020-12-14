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
    margin: theme.spacing(2),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "2rem",
  },
  text: {
    color: "white",
    marginTop: 0,
    maxWidth: "80%",
    margin: "auto",
    marginBottom: "2rem",
  },
  typedContainer: {
    background: "rgba(38,50,56,0.7)",
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
      <Typography className={classes.title} variant="h2">
        Joe Schlick
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4">
        Full Stack Web Developer
      </Typography>
      <Typography className={classes.text} variant="h6">
        Background in Corporate Event Production and Film Production. Well
        tested project and team management skills. Fast learner who is highly
        adaptable, thriving in dynamic environments where deadlines count.
        Dependable and hard-working, with a good attitude and a great sense of
        humor.
      </Typography>
    </Box>
  );
};

export default Header;
