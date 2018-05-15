import styled from "styled-components";

export const Wrapper = styled.div`
 left: ${props => (props.enabled && props.sidebarOpen) ? props.width : "0"};
 position: relative;
 box-shadow:  ${props => (props.reveal && props.sidebarOpen) ? "-5px 0px 20px 1px rgba(0,0,0,0.15)" : "none"};
 transition: left 0.25s linear;
`;
export const SideBar = styled.div`
  height: 100%;
  width: 60%;
  position: absolute;
  left: ${props => (props.reveal || props.sidebarOpen) ? "0" : props.width};
  top: 0;
  background-color: #e3e3e3;
  z-index: ${props => props.reveal ? "0" : "99"};
  box-shadow:  ${props => (props.reveal || props.sidebarOpen) ? "5px 0px 20px 1px rgba(0,0,0,0.15)" : "none"};
  transition: left 0.25s linear;
`;

export const Backdrop = styled.div`
  background-color: rgba(0,0,0,0.35);
  opacity: ${props => props.sidebarOpen ? "1" : "0"};
  visibility: ${props => props.sidebarOpen ? "visible" : "hidden"};
  transition: all 0.25s linear;
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
export const LinksWrapper = styled.div`
   display: flex;
`;
export const SidebarLogo = styled.h1`
   text-align: center;
   margin-top: 1rem;
    transition: all 0.1s linear;
   visibility: ${props =>props.sidebarOpen ? "visible" : "hidden"};
`;
export const NavbarPanel = styled.div`
  width: 100%;
  height: ${props => props.resize ? "50px" : "100px"};
  margin-bottom: 0.1em;
  background: radial-gradient(circle at bottom center, #FFC837 15px, #FF8008);
  color: #efefef;
  text-align: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
`;
export const HamburgerWrapper = styled.div`
  position: absolute;
  left: 40px;
  top: ${props => props.resize ? "25px" : "45px"};
`;
export const ItemsList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction:  ${props => props.sidebar ? "column" : "row"};
  justify-content:  ${props => props.resize ? "center" : "space-between"};
  margin:  ${props => props.sidebar ? "1rem" : "0 auto"};
  align-items: baseline;
  font-size: 1.2rem;
  padding: ${props => props.resize ? "0" : "1em"};
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