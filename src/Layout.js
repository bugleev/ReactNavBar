import React from "react";
import { render } from "react-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

class Layout extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar widthBreakpoint="auto" animation="slide" height="" />
        <Header nav="Header" />
        <div />
        <Body nav="Article 1" />
        <div />
        <Footer nav="Footer" />
      </React.Fragment>
    );
  }
}
render(<Layout />, document.getElementById("root"));
