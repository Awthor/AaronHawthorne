import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { IconButton, CardMedia } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginBottom: 10,
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
  const { title, description, imageUrl, externalUrl, moredescription,} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ background: '#242526' }}>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
      <CardMedia 
        className={classes.media}
        style={{ height: "180px" }}
        image={imageUrl} 

        /></a>
      <CardContent variant="body3" component="h3" style={{ color: '#fff' }}>
        {title}
        <Typography variant="caption" component="p" style={{ color: '#fff' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ color: '#fff' }}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="caption" component="p" style={{ color: '#fff' }} >
            {moredescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MyCard;
