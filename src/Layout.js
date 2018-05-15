import React from "react";
import { render } from "react-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";

class Layout extends React.Component {
  state = {};

  render() {
    return (
      <Navbar widthBreakpoint="480" animation="slide">
        <Header nav="Header" />
        <div />
        <Body nav="Article 1" />
        <div>            
        </div>
        <Footer nav="Footer" />
      </Navbar>
    );
  }
}
render(<Layout />, document.getElementById("root"));
