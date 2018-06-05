import React from "react";
import styled, { keyframes } from "styled-components";

class Dropdown extends React.PureComponent {
  state = {
    show: false,
    popupIsHovered: false,
    coords: {
      top: 0,
      left: 0,
      width: 0
    }
  };

  showPopup = () => {
    if (!this.state.show) {
      setTimeout(() => {
        this.setState({ show: true });
      }, 200)
    }
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  }
  popupIsHovered = () => {
    this.setState({ popupIsHovered: true });
  };

  hidePopup = (e, message) => {
    setTimeout(() => {
      (!this.state.popupIsHovered || message) && this.setState({ show: false, popupIsHovered: false });
    }, 150);
  }

  componentDidMount() {
    const newCoords = this.anchorBox.getBoundingClientRect();
    this.setState({ coords: newCoords });
  }

  render() {
    const { anchorText, width, breakpointHit } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <DropdownAnchor
          onMouseEnter={!breakpointHit ? this.showPopup : undefined}
          onMouseLeave={!breakpointHit ? this.hidePopup : undefined}
          onClick={breakpointHit ? this.handleClick : undefined}
          onBreakpointHit={breakpointHit}
          innerRef={el => (this.anchorBox = el)}
        >
          {anchorText}
        </DropdownAnchor>
        {breakpointHit
          ? <DropdownBodySidebar
            className="dropdown__body--sidebar"
            width={width}
            show={this.state.show}
            coords={this.state.coords}
          >
            {this.props.children}
          </DropdownBodySidebar>
          : <DropdownBody
            className="dropdown__body--sidebar"
            width={width}
            show={this.state.show}
            coords={this.state.coords}
            onMouseEnter={this.popupIsHovered}
            onMouseLeave={(e) => this.hidePopup(e, "hovered")}
          >
            {this.props.children}
          </DropdownBody>}

      </div>
    );
  }
}
const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`;
const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
`;
const DropdownBody = styled.div.attrs({
  style: props => ({
    visibility: (props.show ? "visible" : "hidden"),
    animationName: props.show ? fadeInDown : fadeOutDown
  }),
}) `
  position: absolute;
  width: ${props => props.width || props.coords.width}px;
  top: ${props => props.coords.height + 5}px;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  transform-origin: top center; 
  transition: visibility 0.3s ease;
  display:flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1900;
  border: 1px solid #d4d4d5;
  max-width: 250px;
  background: #ffffff;
  padding: 0.4em 0.5em;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),
  0px 2px 10px 0px rgba(34, 36, 38, 0.15);
    > *{
     list-style: none;
     padding: 0.2em;
     > *{
        cursor: pointer;
        &:hover {
        transform: scale(1.1);
      }
  }
`;
const DropdownBodySidebar = styled.div.attrs({
  style: props => ({
    maxHeight: (props.show ? "200px" : "0px"),
    transition: (props.show ? "all 0.6s ease-out" : "all 0.2s")
  }),
}) `
  display:flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 1900;  
  min-width: 240px;   
  background: #e3e3e3;
  border-radius: 3px; 
  color: rgba(0, 0, 0, 0.87);  
  box-shadow: inset 0px 0px 10px -2px rgba(0,0,0,0.45);
    > *{
     text-align: center; 
     list-style: none;
     width: calc(100% - 10px);
     padding: 0.2em;
     > *{        
        background-color: #e3e3e3;
        cursor: pointer;
        &:hover {        
        background: #fefefe; 
      }
  }
`;
const DropdownAnchor = styled.a.attrs({
  style: props => ({
    margin: (props.onBreakpointHit ? "0" : "0.25em"),
    padding: (props.onBreakpointHit ? "0" : "0.25em")
  }),
}) `
  display: inline-block;  
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  list-style: none; 
`;

export default Dropdown;
