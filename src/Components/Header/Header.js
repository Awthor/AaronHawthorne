import React from "react";
import { AppBar, Toolbar, Typography, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./Header.css";
import Signature from "../Images/signature.png";
import ScrollDialog from "../AboutMe/AboutMe";

const Header = () => {
  return (
    <div className="header" >
    <img src={Signature}/>
    <div className="headerButton">
    <ScrollDialog />
    </div>
    </div> 
  );
};  

export default Header;
