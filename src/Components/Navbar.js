import React from "react";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";
import {
  Backdrop,
  NavbarPanel,
  SideBar,
  SidebarLogo,
  HamburgerWrapper,
  ListLink,
  Logo,
  ItemsList,
  Item,
  Wrapper
} from "../Styled Components/NavbarStyles";

class Navbar extends React.Component {
  state = {
    widthBreakpoint: null,
    windowInnerWidth: null,
    breakpointHit: false,
    sideBarIsOpen: false,
    sticky: false,
    links: []
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
      breakpointHit: sizeChange,
      windowInnerWidth: window.innerWidth
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
        this.props.animation === "slide" || !this.state.sideBarIsOpen
          ? true
          : false;
      addOverflow(useTimer);
    });
  };
  handleWindowScroll = () => {
    window.scrollY > 50 && !this.state.sticky
      ? this.setState({ sticky: true })
      : window.scrollY < 50 &&
        this.state.sticky &&
        this.setState({ sticky: false });
  };
  componentWillMount() {
    this.handleResize();
    const newLinks = [];
    for (let child of this.props.children) {
      if (child.props.nav) {
        newLinks.push(child.props.nav);
      }
    }
    this.setState({ links: newLinks });
  }
  componentDidMount() {
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
      sideBarIsOpen,
      breakpointHit,
      windowInnerWidth,
      sticky
    } = this.state;
    const { animation, height } = this.props;
    const dropDown = !breakpointHit ? (
      <Dropdown anchorText="Values" width="">
        <ul>
          <li>
            <a>Link 1</a>
          </li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </Dropdown>
    ) : null;
    return (
      <div>
        <SideBar
          sidebarOpen={sideBarIsOpen}
          width={`-${windowInnerWidth * 0.6}px`}
          reveal={animation === "reveal"}
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
        <Wrapper
          sidebarOpen={sideBarIsOpen}
          enabled={animation !== "slide"}
          width={`${windowInnerWidth * 0.6}px`}
          reveal={animation === "reveal"}
        >
          <Backdrop sidebarOpen={sideBarIsOpen} />
          <NavbarPanel resize={breakpointHit} navbarHeight={height} sticky={sticky}>
            <ItemsList resize={breakpointHit}>
              <Logo innerRef={el => (this.sizeLogo = el)}> Logo </Logo>
              <div
                ref={el => (this.sizeLinks = el)}
                style={{ display: "flex" }}
              >
                {dropDown}
                {!breakpointHit ? (
                  links.map((el, ind) => (
                    <Item key={ind}>
                      <ListLink href="#">{el}</ListLink>
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
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}

export default Navbar;
