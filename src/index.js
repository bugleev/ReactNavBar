import React from "react";
import { render } from "react-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";

const Logo = () => (
  <div>
    <a href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png" alt="logo" />
    </a>
  </div>
)


class Layout extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar
            height=""
            widthBreakpoint="auto"
            sidebarAnimation="slide"
            pinAnimation="follow"
          >
            <Dropdown anchorText="Values" width="150" navlink="true">
              <ul>
                <li>
                  <a>Link 1. LOng one</a>
                </li>
                <li>Link 2. Reaaly reaaly long one</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
            </Dropdown>
            <div navlink="true">
              <p><a href="#footer">Nested link</a></p>
            </div>
            <li navlink="true">Link LI</li>
            <li navlink="true">Crazy stuff</li>
            <a href="#" navlink="true">Direct Link</a>
            <Logo navLogo />
          </Navbar>
        </div>
        <Header nav="Header" />
        <div />
        <Body nav="Article 1" />
        <div />
        <Footer nav="Footer" id="footer" />
      </React.Fragment>
    );
  }
}
render(<Layout />, document.getElementById("root"));
