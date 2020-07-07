import React from "react";
import { AppBar, Toolbar, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SocialMedia from "./SocialMedia";


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  fill: "green"
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Aaron Hawthorne Portfolio
        </Typography>
        <SocialMedia 
              email="aaronhawthorne12345@gmail.com"
              github="https://github.com/Awthor"
              linkedIn="https://www.linkedin.com/in/aaronhawthorneproptech/"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;