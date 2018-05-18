import React from "react";
import styled, { keyframes } from "styled-components";

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
    visibility:(props.show ? "visible" : "hidden"),
    animationName: props.show ? fadeInDown : fadeOutDown
  }),
})`
  position: absolute;
  width: ${props => props.width || props.coords.width}px;
  top: ${props => props.coords.height+5}px;
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
const DropdownAnchor = styled.a`
  display: inline-block;
  margin: 0.25em;
  padding: 0.25em;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  list-style: none;
  
`;
class Dropdown extends React.PureComponent {
  state = {
    show: false,
    popupHovered: false,
    coords: {
      top: 0,
      left: 0,
      width: 0
    }
  };
  
  showPopup = (e, message) => {
    if(!this.state.show) {
      setTimeout(() => {
        this.setState({ show: true });
      }, 200)
    }
  }

  popupHovered = () => {
     this.setState({ popupHovered: true });
  };

  hidePopup = (e, message) => {
    setTimeout(() => {
      (!this.state.popupHovered || message) && this.setState({ show: false, popupHovered:false });
    }, 150);
  }

  componentDidMount() {
    const newCoords = this.anchorBox.getBoundingClientRect();
    this.setState({ coords: newCoords });
  }

  render() {
    const {anchorText, width} = this.props;
    return (
      <div style={{position: "relative"}}>
        <DropdownAnchor 
          onMouseEnter={this.showPopup}
          onMouseLeave={this.hidePopup}
          innerRef={el => (this.anchorBox = el)}
        >
          {anchorText}
        </DropdownAnchor>
        <DropdownBody
          width={width}
          show={this.state.show}
          coords={this.state.coords}
          onMouseEnter={this.popupHovered}
          onMouseLeave={(e) => this.hidePopup(e, "hovered")}
        >
          {this.props.children}
        </DropdownBody>
      </div>
    );
  }
}

export default Dropdown;
