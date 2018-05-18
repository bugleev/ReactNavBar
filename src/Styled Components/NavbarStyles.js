import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div.attrs({
  style: props => ({
    left: (props.enabled && props.sidebarOpen) ? props.width : "0",
    boxShadow:  (props.reveal && props.sidebarOpen) ? "-5px 0px 20px 1px rgba(0,0,0,0.15)" : "none"
  }),
})`
 position: relative;
 transition: left 0.2s linear;
`;
export const SideBar = styled.div.attrs({
  style: props => ({
    transform: (props.reveal || props.sidebarOpen) ? "translate3d(0, 0, 0)" : "translate3d(-100%, 0, 0)",
    boxShadow:  (props.reveal || props.sidebarOpen) ? "5px 0px 20px 1px rgba(0,0,0,0.15)" : "none",
    zIndex:  props.reveal ? "0" : "99",
    transition: props.sidebarOpen ? "transform 0.2s" : "transform 0.2s"
  }),   
})`
  height: 100%;
  width: 60%;
  position: absolute;  
  background-color: #e3e3e3; 
    > div{
      top: 5px;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: ${props => props.width.slice(1)};
    } 
`;

export const Backdrop = styled.div.attrs({
  style:  props => props.sidebarOpen ? ({
    opacity: "1", visibility: "visible"
  }) : ({
      opacity: "0", visibility: "hidden"
  }),
}) `
  background-color: rgba(0,0,0,0.35);
  transition: all 0.2s linear;
  z-index: 89;
  position:absolute;
  top: 0;
  left:0;
  bottom:0;
  right:0;
`;
export const Logo = styled.h1`
   text-align: center;
   display: block;
`;

export const SidebarLogo = styled.h1.attrs({
  style: props => ({
    visibility: props.sidebarOpen ? "visible" : "hidden" 
  }),
})`
   text-align: center;
   margin-top: 1rem;
   transition: all 0.1s linear;   
`;

const moveDown = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
     transform: translate3d(0, 0, 0);
  }
`;
const appear = keyframes`
  0% {
    opacity: 0;
   

  }
  100% {
     opacity: 1;
   
  }
`;
export const NavbarPanel = styled.div.attrs({
  style: props => ({
    position: props.sticky ? "fixed" : "absolute",
    boxShadow: props.sticky ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "0px 1px 3px rgba(0, 0, 0, 0.3)",
    animationName: props.sticky ? moveDown : "none"
  }),
})`
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  transition: box-shadow 0.2s;
  height: ${props => props.resize ? "50" : props.navbarHeight || "80"}px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 79;
  margin-bottom: 0.1em;
  background: radial-gradient(circle at bottom center, #FFC837 15px, #FF8008);
  color: #efefef; 
`;
export const HamburgerWrapper = styled.div.attrs({
  style: props => ({
    top: props.resize ? "25px" : "45px"
  }),
})`
  position: absolute;
  left: 40px;
`;
export const ItemsList = styled.ul.attrs({
  style: props => ({
    flexDirection:  props.sidebar ? "column" : "row",
    justifyContent:  props.resize ? "center" : "space-between",
    margin: props.sidebar ? "1rem" : "0 auto"   
  }),
})`
  width: 80%;
  display: flex;
  align-items: baseline;
  font-size: 1.2rem;
  padding: 0.2em;
`;
export const Item = styled.li`
  list-style: none;
  margin: 0.25em;
  padding: 0.25em;
`;
export const ListLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    color: #fff;
  }
`;