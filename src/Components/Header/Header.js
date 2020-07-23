import React from "react";
import { AppBar, Toolbar, Typography, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    color : '#353535',
  },
  typographyStyle2: {
    flex: 1,
    color: '#fff'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" style={{ background: '#ff6f00' }}>
      <Toolbar>
        <Typography className={classes.typographyStyle2}>
        Aaron Hawthorne
        </Typography>
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;
