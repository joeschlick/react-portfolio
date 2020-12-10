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
import project1 from "../images/Qtrends.png"

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",
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
                    Project 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ad ullamco in ex et proident ullamco consectetur cupidatat ea dolor id irure. Quis adipisicing nisi duis ipsum labore ut id voluptate enim. 
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
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
