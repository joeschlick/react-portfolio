import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    from: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    }
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const Contacts = () => {
    const classes = useStyles()
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">Contact me:</Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br/>
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br/>
          <InputField
            fullWidth={true}
            label="Company"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br/>
          <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />} >
              Submit
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
