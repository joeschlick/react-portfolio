import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const Porfolio = () => {
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center" alignItems="center">
          { /*Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia 
              component="img" 
              alt=""
              height="140"
              image={}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Porfolio;
