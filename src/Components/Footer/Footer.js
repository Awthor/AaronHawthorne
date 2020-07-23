import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  typographyStyle2: {
    color: '#ff6f00'
}});

export default function LabelBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation item xs={12} sm={4} width="100%" display="flex" style={ {background: '#18191a' }}>
    <a href={`mailto:aaronhawthorne12345@gmail.com`} target="_blank" rel="noopener noreferrer">
         <BottomNavigationAction label="Email Me" value="recents" icon={<EmailIcon className={classes.typographyStyle2} />} /></a> 
    <a href='https://github.com/Awthor' target="_blank" rel="noopener noreferrer">     
      <BottomNavigationAction label="GitHub" value="favorites" icon={<GitHubIcon className={classes.typographyStyle2} />} /></a>
    <a href='https://www.linkedin.com/in/aaronhawthorneproptech/' target="_blank" rel="noopener noreferrer">
      <BottomNavigationAction label="LinkedIn" value="nearby" icon={<LinkedInIcon className={classes.typographyStyle2}/>} /></a>
    <a href='https://www.instagram.com/aaronhawthorne_/' target="_blank" rel="noopener noreferrer">  
      <BottomNavigationAction label="Instagram" value="folder" icon={<InstagramIcon className={classes.typographyStyle2} />} /></a>
    </BottomNavigation>
  );
  }