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
  LinksWrapper,
  Logo,
  ItemsList,
  Item,
  Wrapper
} from "../Styled Components/NavbarStyles";

class Navbar extends React.Component {
  state = {
    breakpointHit: false,
    windowInnerWidth: null,
    sideBarIsOpen: false,
    links: []
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

  handleResize = () => {
    const sizeChange =
      window.innerWidth <= parseInt(this.props.widthBreakpoint, 10)
        ? true
        : false;
    this.setState({
      breakpointHit: sizeChange,
      windowInnerWidth: window.innerWidth
    });
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleHamburgerClick = () => {
    this.setState({ sideBarIsOpen: !this.state.sideBarIsOpen }, () => {
      document.body.style.overflow = this.state.sideBarIsOpen
        ? "hidden"
        : "auto";
    });
  };
  render() {
    const {
      links,
      sideBarIsOpen,
      breakpointHit,
      windowInnerWidth
    } = this.state;
    const { animation } = this.props;
    const dropDown = !breakpointHit ? (
      <Dropdown anchorText="Values">
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
          <NavbarPanel resize={breakpointHit}>
            <div>
              <ItemsList resize={breakpointHit}>
                <Logo> Logo </Logo>
                <LinksWrapper>
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
                </LinksWrapper>
              </ItemsList>
            </div>
          </NavbarPanel>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}

export default Navbar;
