import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import eventRez1 from "../eventRez1.jpg";
import eventRez2 from "../eventRez2.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "rgba(38,50,56,0.7)",
    color: "white",
  },
});

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          Resume
        </Typography>
        <Box component="div">
          <Grid container justify="center" spacing={2} >
            <Grid item xs={12} >
            <img src={eventRez1}  />
            <img src={eventRez2}  />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
