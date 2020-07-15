import React from "react";
import { AppBar, Toolbar, Typography, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1, 
    color : '#353535'
  },
  typographyStyle2: {
    flex: 1,
    color: '#fff'
  },
  iconStyles: {
    position: 'relative',
    flexGrow: 1, 
    marginRight: 1,
  },
  }));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed"style={{ background: '#ff6f00' }}>
      <Toolbar>
      <EmailIcon className={classes.typographyStyle2} />
      <GitHubIcon className={classes.typographyStyle2} />
        <Typography className={classes.typographyStyle2}>
          Aaron Hawthorne Portfolio
        </Typography>
        <LinkedInIcon className={classes.typographyStyle2} />
        <InstagramIcon className={classes.typographyStyle2} />
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;