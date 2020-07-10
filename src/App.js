import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import me from './Components/Images/Me.jpg';
import Team from "./Components/Team/Team.js";
import "./App.css";
import Container from '@material-ui/core/Container';


const App = () => {
  return (
    <Grid container direction="column" className="App">
      <Grid item >
        <Header />
      </Grid>
      <Grid item container >
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <Team />
        <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;