import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  mainContainer: {
    background: "rgba(38,50,56,0.7)",
    color: "white",
    paddingBottom: 500,
  },
  cardContainer: {
    width: 520,
    margin: "3rem",
    margin: "3rem auto",
    background: "#EEE9E9",
  },
  cardContent: {
    height: 600,
    margin: "1rem",
  },
});

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Box component="div">
        <Typography variant="h4" align="center">
          Contact Information
        </Typography>
      </Box>
      <Grid container justify="center">
        <Card className={classes.cardContainer}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h4">
              Location
            </Typography>
            <Typography variant="h6">Auburn, California</Typography>
            <br />
            <Typography gutterBottom variant="h4">
              Mobile
            </Typography>
            <Typography variant="h6">415.377.6370</Typography>
            <br />
            <Typography gutterBottom variant="h4">
              Email
            </Typography>
            <Button href="mailto: schlickjoe@gmail.com" variant="outlined">
              schlickjoe@gmail.com
            </Button>
            <br />
            <br />
            <Typography gutterBottom variant="h4">
              GitHub
            </Typography>
            <Button
              href="https://github.com/joeschlick"
              variant="outlined"
              target="blank"
            >
              https://github.com/joeschlick
            </Button>
            <br />
            <br />
            <Typography gutterBottom variant="h4">
              LinkedIn
            </Typography>
            <Button
              href="https://www.linkedin.com/in/joe-schlick-664b503a/"
              target="blank"
              variant="outlined"
            >
              https://www.linkedin.com/in/joe-schlick-664b503a
            </Button>
            <br />
            <br />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Contacts;
