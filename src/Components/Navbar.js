import React from "react";
import Hamburger from "./Hamburger";
import numericString from ".././helpers/heightValidator";
import numericAutoString from ".././helpers/widthValidator";
import PropTypes from 'prop-types';
import {
  Backdrop,
  NavbarPanel,
  SideBar,
  SidebarLogo,
  HamburgerWrapper,
  Logo,
  ItemsList,
  Item
} from "../Styled Components/NavbarStyles";

class Navbar extends React.Component {
  state = {
    widthBreakpoint: null,
    breakpointHit: false,
    sideBarIsOpen: false,
    isMobile: null,
    sticky: false,
    links: [],
    logos: []
  };

  calculateBreakpoint = () => {
    let breakPoint;
    if (this.props.widthBreakpoint === "auto") {
      const logoSize = this.sizeLogo.getBoundingClientRect().width;
      const linksSize = this.sizeLinks.getBoundingClientRect().width;
      breakPoint = (logoSize + linksSize) / 0.75;
    } else {
      breakPoint = this.props.widthBreakpoint;
    }
    return breakPoint;
  };

  handleResize = () => {
    const sizeChange =
      window.innerWidth <= this.state.widthBreakpoint
        ? true
        : false;
    this.setState({
      breakpointHit: sizeChange
    });
  };

  handleHamburgerClick = () => {
    const addOverflow = withTimer => {
      withTimer
        ? setTimeout(() => {
          document.body.style.overflow = this.state.sideBarIsOpen
            ? "hidden"
            : "auto";
        }, 250)
        : (document.body.style.overflow = this.state.sideBarIsOpen
          ? "hidden"
          : "auto");
    };
    this.setState({ sideBarIsOpen: !this.state.sideBarIsOpen }, () => {
      const useTimer =
        this.props.sidebarAnimation === "slide" || !this.state.sideBarIsOpen
          ? true
          : false;
      addOverflow(useTimer);
      this.props.sidebarAnimation !== "slide" && this.addPushAnimation();
    });
  };

  isMobile = () => {
    return (typeof window.orientation !== "undefined" && window.screen.availWidth <= 480) || (navigator.userAgent.indexOf('IEMobile') !== -1 && window.screen.availWidth < 480);
  };

  addPushAnimation = () => {
    if (this.state.sideBarIsOpen) {
      document.body.style.left = "320px";
      document.body.style.transition = "left 0.5s";
    } else {
      document.body.style.left = "0px";
      document.body.style.transition = "left 0.3s";
    }
  };

  handleWindowScroll = () => {
    const navbarHeight =
      this.props.pinAnimation !== "follow" ? this.props.height || 80 : 0;
    window.scrollY > navbarHeight && !this.state.sticky
      ? this.setState({ sticky: true })
      : window.scrollY === 0 &&
      this.state.sticky &&
      this.setState({ sticky: false });
  };
  createLinks = () => {
    let myLinks = [];
    let myLogos = [];
    if (this.props.children) {
      for (let child of this.props.children) {
        if (child.props["data-navlogo"]) {
          myLogos.push(child)
        }
        if (child.props["data-navlink"]) {
          myLinks.push(child);
        }
      }
    }
    this.setState({ links: myLinks, logos: myLogos });
  };

  componentWillMount() {
    this.handleResize();
    this.createLinks();
  }

  componentDidMount() {
    document.body.style.position = "relative";
    document.body.style.left = "0px";
    const breakPoint = this.calculateBreakpoint();
    this.setState({ widthBreakpoint: breakPoint, isMobile: this.isMobile() }, () => {
      this.handleResize();
    });
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleWindowScroll);
  }
  render() {
    const {
      links,
      logos,
      isMobile,
      sideBarIsOpen,
      breakpointHit,
      sticky
    } = this.state;
    const newLinks = React.Children.map(links, (child, index) => {
      if (typeof child.type !== "string") {
        return React.cloneElement(child, {
          breakpointHit: this.state.breakpointHit,
          isMobile
        })
      } else {
        return React.cloneElement(child)
      }
    });
    const { height, pinAnimation, sidebarAnimation } = this.props;

    return (
      <div>
        <SideBar
          width={isMobile ? window.screen.availWidth : undefined}
          sidebarOpen={sideBarIsOpen}
          slide={sidebarAnimation === "slide"}
          id="sidebar"
        >
          <div>
            <HamburgerWrapper resize={breakpointHit}>
              <Hamburger
                options={{
                  toggle: false,
                  initialState: 1,
                  size: "s",
                  color: "black"
                }}
                click={this.handleHamburgerClick}
              />
            </HamburgerWrapper>
            <SidebarLogo sidebarOpen={sideBarIsOpen}> {logos} </SidebarLogo>
            <ItemsList resize={breakpointHit} sidebar={true}>
              {newLinks.map((el, ind) => (
                <Item key={ind} sidebar={true}>
                  {el}
                </Item>
              ))}
            </ItemsList>
          </div>
        </SideBar>
        <Backdrop sidebarOpen={sideBarIsOpen} className="backdrop" />
        <NavbarPanel
          className="navbar-panel"
          resize={breakpointHit}
          navbarHeight={height}
          sticky={sticky}
          follow={pinAnimation === "follow"}
        >
          <ItemsList resize={breakpointHit}>
            <Logo
              resize={breakpointHit}
              navbarHeight={height}
              innerRef={el => (this.sizeLogo = el)} id="logo-wrapper"
            >
              {logos}
            </Logo>
            <div
              ref={el => (this.sizeLinks = el)}
              style={{ display: "flex", alignItems: "center" }}
            >
              {!breakpointHit ? (newLinks.map((el, ind) => (
                <Item key={ind}>
                  {el}
                </Item>
              ))
              ) : (<HamburgerWrapper resize={breakpointHit}>
                <Hamburger
                  options={{ toggle: false, initialState: 0, size: "s", color: "black" }}
                  click={this.handleHamburgerClick}
                  sidebarOpen={sideBarIsOpen}
                />
              </HamburgerWrapper>
                )}
            </div>
          </ItemsList>
        </NavbarPanel>
      </div>
    );
  }
}
Navbar.defaultProps = {
  height: "",
  widthBreakpoint: "auto",
  sidebarAnimation: "slide",
  pinAnimation: "follow"
};
Navbar.propTypes = {
  height: numericString.isRequired,
  widthBreakpoint: numericAutoString.isRequired,
  sidebarAnimation: PropTypes.string,
  pinAnimation: PropTypes.string
};
export default Navbar;