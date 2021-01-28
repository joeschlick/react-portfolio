import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Paper } from "@material-ui/core";
import Navbar from "./Navbar";
import eventRez1 from "../eventRez1.jpg";
import eventRez2 from "../eventRez2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  mainContainer: {
    background: "rgba(38,50,56,0.7)",
    color: "white",
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "1rem",
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
    //textAlign: "center",
    zIndex: 1,
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          Experience
        </Typography>
      </Box>
      <Box className={classes.typedContainer}>
        <Typography className={classes.subtitle} variant="h4" align="center">
          Technical Skills
        </Typography>
        <Typography className={classes.text} variant="h6">
          <strong>Languages:</strong> React, Mongoose, Mongo DB, Sequelize,
          MySQL, Express, Node JS, JavaScript, HTML, CSS, Bootstrap, Material UI
          <br/>
          <strong>Applications: </strong>
          Mac OS, VS Code, G Suite, Microsoft Office, Windows 10, Sketchup, Illustrator,
          Photoshop
        </Typography>
        <Typography className={classes.text} variant="h6">
          
        </Typography>
      </Box>
    </>
  );
};

export default Resume;
