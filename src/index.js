import React from "react";
import { render } from "react-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";

const Logo = () => (
  <div>
    <a href="">
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
          <Navbar >
            <Dropdown anchorText="Big Data ON Board" data-navlink="true">
              <ul>
                <li>
                  <a href="https://google.com">Link 1. LOng one</a>
                </li>
                <li>Link 2. Reaaly reaaly long one</li>
                <a>Link 3</a>
                <li>Link 4</li>
              </ul>
            </Dropdown>
            <div data-navlink="true">
              <p><a href="">Nested link</a></p>
            </div>
            <li data-navlink="true">Link LI</li>
            <li data-navlink="true">Crazy stuff</li>
            <a href="" data-navlink="true">Direct Link</a>
            <Logo data-navlogo="true" />
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
