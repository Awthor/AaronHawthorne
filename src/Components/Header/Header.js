import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1 
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
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Aaron Hawthorne Portfolio
        </Typography>
        <LinkedInIcon className={classes.iconStyles}/>
        <GitHubIcon className={classes.iconStyles}/>
        <EmailIcon  className={classes.iconStyles}/>
        <InstagramIcon className={classes.iconStyles}/>
      </Toolbar>

    </AppBar>
    
  );
};

export default Header;