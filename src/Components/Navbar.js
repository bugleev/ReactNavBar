import React from "react";
import Hamburger from "./Hamburger";
import {
  Backdrop,
  NavbarPanel,
  SideBar,
  SidebarLogo,
  HamburgerWrapper,
  ListLink,
  Logo,
  ItemsList,
  Item
} from "../Styled Components/NavbarStyles";

class Navbar extends React.Component {
  state = {
    widthBreakpoint: null,
    breakpointHit: false,
    sideBarIsOpen: false,
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
      window.innerWidth <= parseInt(this.state.widthBreakpoint, 10)
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
    for (let child of this.props.children) {
      if (child.props.navLogo) {
        myLogos.push(child)
      }
      if (child.props.navLink) {
        myLinks.push(child);
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
    this.setState({ widthBreakpoint: breakPoint }, () => {
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
      sideBarIsOpen,
      breakpointHit,
      sticky
    } = this.state;
    const { height, pinAnimation, sidebarAnimation } = this.props;

    return (
      <div>
        <SideBar
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
                  size: "m",
                  color: "green"
                }}
                click={this.handleHamburgerClick}
              />
            </HamburgerWrapper>
            <SidebarLogo sidebarOpen={sideBarIsOpen}> Logo </SidebarLogo>
            <ItemsList resize={breakpointHit} sidebar={true}>
              {links.map((el, ind) => (
                <Item key={ind} sidebar={true}>
                  <ListLink href="#">{el}</ListLink>
                </Item>
              ))}
            </ItemsList>
          </div>
        </SideBar>
        <Backdrop sidebarOpen={sideBarIsOpen} className="backdrop" />
        <NavbarPanel
          resize={breakpointHit}
          navbarHeight={height}
          sticky={sticky}
          follow={pinAnimation === "follow"}
        >
          <ItemsList resize={breakpointHit}>
            <Logo innerRef={el => (this.sizeLogo = el)} id="logo-wrapper">
              {logos}
            </Logo>
            <div
              ref={el => (this.sizeLinks = el)}
              style={{ display: "flex", alignItems: "center" }}
            >
              {!breakpointHit ? (
                links.map((el, ind) => (
                  <Item key={ind}>
                    {el}
                  </Item>
                ))
              ) : (
                  <HamburgerWrapper resize={breakpointHit}>
                    <Hamburger
                      options={{ toggle: false, initialState: 0, size: "m" }}
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

export default Navbar;
