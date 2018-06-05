import styled, { keyframes } from "styled-components";

export const SideBar = styled.div.attrs({
  style: props => ({
    boxShadow: props.sidebarOpen ? "5px 0px 20px 1px rgba(0,0,0,0.15)" : "none",
    zIndex: !props.sidebarOpen ? "89" : "99",
    left: props.width
      ? props.slide
        ? props.sidebarOpen
          ? "0px"
          : `-${props.width}px`
        : "-320px"
      : "-320px",
    transition: props.slide
      ? props.sidebarOpen
        ? "left 0.2s, box-shadow 0.2s, z-index 0.4s"
        : "left 0.2s, box-shadow 0.2s, z-index 0.5s"
      : props.sidebarOpen
        ? "left 0.1s, box-shadow 0.2s, z-index 0.4s"
        : "box-shadow 0.2s, z-index 0.5s"
  })
}) `
  height: 100%; 
  width:  ${props => (props.width ? props.width : "320")}px;
  position: absolute;
  background-color: #fefefe;
  > div {
    top: 5px;
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Backdrop = styled.div.attrs({
  style: props =>
    props.sidebarOpen
      ? {
        opacity: "1",
        visibility: "visible"
      }
      : {
        opacity: "0",
        visibility: "hidden"
      }
}) `
  background-color: rgba(0, 0, 0, 0.35);
  transition: all 0.2s;
  z-index: 89;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const Logo = styled.div`
  text-align: center;
  display: flex;
  & img {
    height: ${props => (props.resize ? "50" : props.navbarHeight || "80")}px;
  }
  > * {
    margin: 0 0.2em;
  }  
`;

export const SidebarLogo = styled.h1.attrs({
  style: props => ({
    visibility: props.sidebarOpen ? "visible" : "hidden"
  })
}) `
  text-align: center;
  margin-top: 1rem;
  transition: all 0.1s linear;
  & img {
    height: 80px;
  }
`;

const moveDown = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
     transform: translate3d(0, 0, 0);
  }
`;
export const NavbarPanel = styled.div.attrs({
  style: props => ({
    position: props.sticky ? "fixed" : "absolute",
    boxShadow: props.sticky
      ? "0px 2px 5px rgba(0, 0, 0, 0.5)"
      : "0px 1px 3px rgba(0, 0, 0, 0.3)",
    animationName: props.sticky && !props.follow ? moveDown : "none",
    height: props.resize ? "50px" : props.navbarHeight || "80px"
  })
}) `
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  transition: box-shadow 0.2s;  
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 79;
  margin-bottom: 0.1em;
  /*background: radial-gradient(circle at bottom center, #ffc837 15px, #ff8008);*/
  background-color: #fefefe;
  color: #333;
`;
export const HamburgerWrapper = styled.div.attrs({
  style: props => ({
    top: props.resize ? "25px" : "45px"
  })
}) `
  position: absolute;
  left: 40px;
`;
export const ItemsList = styled.ul.attrs({
  style: props => ({
    flexDirection: props.sidebar ? "column" : "row",
    justifyContent: props.resize ? "center" : "space-between",
    margin: props.sidebar ? "1rem" : "0 auto"
  })
}) `
  width: 80%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.2em;
`;
export const Item = styled.div`
  list-style: none;
  text-align: center;
  margin: 0.25em;
  padding: 0.25em;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  
`;
export const ListLink = styled.a`
  
`;
