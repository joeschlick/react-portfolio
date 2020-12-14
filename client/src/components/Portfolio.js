import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/qtrends.png";
import project2 from "../images/travel.png";
import project3 from "../images/burger.png";
import project4 from "../images/fitness.png";
import project5 from "../images/weather.png";
import project6 from "../images/note-taker.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "rgba(38,50,56,0.7)",
    height: "100%",
  },
  header: {
    //background: "rgba(38,50,56,0.7)",
    color: "white",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto",
    background: "#EEE9E9",
  },
  cardContent: {
    height: 170,
  },
});

const Porfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Box component="header" className={classes.header}>
        <Typography variant="h4" align="center">
          Projects
        </Typography>
      </Box>
      <Grid container justify="center">
        {/*Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project1}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Quicktrends
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Quicktrends provides our users with essential data, easy to
                  read trend analysis, and breaking news for individual stocks.
                  Enter the ticker symbol and watch the logic unfold.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  <a href="https://quicktrends.herokuapp.com/" target="blank">
                    Site
                  </a>
                </Button>
                <Button size="small" variant="outlined">
                  <a
                    href="https://github.com/joeschlick/quicktrends-v2"
                    variant="outlined"
                    target="blank"
                  >
                    Repo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project2}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  The Cynical Traveler's Guide
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Enter a city and state and get a wealth of information: A 5
                  day weather forecast in case a hurricane is on the way, the
                  latest COVID-19 data, and breaking local news stories to
                  inform me of any current or impending disasters.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://joeschlick.github.io/team-sac-repo/" target="blank">Site</a>
                </Button>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://github.com/joeschlick/team-sac-repo" target="blank">Repo</a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project3}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Eat Da Burger
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A burger logger created with MySQL, Node, Express, Handlebars
                  and a homemade ORM (yum!)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://sheltered-savannah-06669.herokuapp.com/" target="blank">
                    Site
                  </a>
                </Button>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://github.com/joeschlick/burger" target="blank">Repo</a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project4}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Workout Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A workout tracker with a Mongo database, Mongoose schema and
                  Express routes
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://sheltered-inlet-81142.herokuapp.com" target="blank">Site</a>
                </Button>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://github.com/joeschlick/workout-tracker" target="blank">
                    Repo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project5}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Weather Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A browser-based weather app using jQuery and a weather API
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://joeschlick.github.io/Weather-Dashboard/" target="blank">
                    Site
                  </a>
                </Button>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://github.com/joeschlick/Weather-Dashboard" target="blank">
                    Repo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={project6}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Express Note Taker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that can be used to write, save, and delete
                  notes. This application will use an express backend and save
                  and retrieve note data from a JSON file.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://frozen-stream-80617.herokuapp.com/" target="blank">Site</a>
                </Button>
                <Button size="small" color="primary" variant="outlined">
                  <a href="https://github.com/joeschlick/express-note-taker" target="blank">
                    Repo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Porfolio;
