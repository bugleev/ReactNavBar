import React from "react";
import { render } from "react-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DropdownSidebar from "./Components/DropDownSidebar";

const Logo = () => (
  <div>
    <a href="#">
      <img src="https://www.seoclerk.com/pics/558390-11FO8A1505384509.png" alt="logo" />
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
            <DropdownSidebar anchorText="Values" width="" navlink="true">
              <ul>
                <li>
                  <a>Link 1</a>
                </li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
            </DropdownSidebar>
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
