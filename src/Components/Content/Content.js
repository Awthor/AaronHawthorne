import React from "react";
import MyCard from "../Card/Card";
import { Grid } from "@material-ui/core";
import cardContent from "../CardContent/CardContent";
import me from "../Images/Me.jpg";

const Content = () => {
  const HomePage = HomeObj => {
    return (
      <Grid item xs={12} sm={4}>
        <MyCard {...HomeObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {cardContent.map(HomeObj => HomePage(HomeObj))}
    </Grid>
  );
};

export default Content;