import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import EmailIcon from '@material-ui/icons/Email';
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const MyCard = props => {
  const { avatarUrl, title, description, imageUrl, externalUrl, email, moredescription } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        style={{ height: "150px" }}
        image={imageUrl} />
      <CardContent>
          {title}
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="body2" component="p">
          {moredescription}
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MyCard;


{/* <CardHeader 
      //   avatar={<a href={externalUrl} target="_blank" rel="noopener noreferrer">
      //   <Avatar src={avatarUrl} /> 
      //   </a>}
        
      //   action={<a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="settings">
            <EmailIcon />
          </IconButton>
      //     </a>
      //   }
      //   title={title}
      /> */}