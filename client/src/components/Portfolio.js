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
import project1 from "../images/qtrends.png"
import project2 from "../images/travel.png"
import project3 from "../images/burger.png"

const useStyles = makeStyles({
    mainContainer: {
        //background: "#233",
        //height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"

    }
})

const Porfolio = () => {
    const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
          { /*Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
              component="img" 
              alt=""
              height="100%"
              image={project1}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5">
                    Quicktrends
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Quicktrends provides our users with essential data, easy to read trend analysis, and breaking news for individual stocks. Enter the ticker symbol and watch the logic unfold. 
                  </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" color="primary">
                    <a href="https://quicktrends.herokuapp.com/">Site</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a href="https://github.com/joeschlick/quicktrends-v2">Repo</a>
                  </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        { /*Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
              component="img" 
              alt=""
              height="100%"
              image={project2}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5">
                    The Cynical Traveler's Guide
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Enter a city and state and get a wealth of information: A 5 day weather forecast in case a hurricane is on the way, the latest COVID-19 data, and breaking local news stories to inform me of any current or impending disasters. 
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" color="primary">
                    <a href="https://joeschlick.github.io/team-sac-repo/">Site</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a href="https://github.com/joeschlick/team-sac-repo">Repo</a>
                  </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        { /*Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
              component="img" 
              alt=""
              height="100%"
              image={project3}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5">
                    Eat Da Burger
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  A burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!) 
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" color="primary">
                    <a href="https://sheltered-savannah-06669.herokuapp.com/">Site</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a href="https://github.com/joeschlick/burger">Repo</a>
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
