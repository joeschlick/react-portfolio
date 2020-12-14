import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 150,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "grey",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub />}
        href="https://github.com/joeschlick"
        target="blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/joe-schlick-664b503a/"
        target="blank"
      />
    </BottomNavigation>
  );
};

export default Footer;
