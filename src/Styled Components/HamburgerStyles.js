import styled from "styled-components";

export const IconWrapper = styled.div`
  width: ${props => props.size[0]};
  height: ${props => props.size[1]};
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${props => props.hide ? "0" : "1"};
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: opacity 0.15s;
`;
export const HamburgerIcon = styled.div`
  background-color: ${props =>
    props.toggle ? "rgba(0, 0, 0, 0)" : props.color};
  width: ${props => props.size[2]};
  height: ${props => props.size[3]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${props =>
    props.toggle ? "none" : "0 1px 3px rgba(0, 0, 0, 0.2)"};
  transition: 0.35s;

  &:before {
    content: "";
    background-color: ${props => props.color};
    width: ${props => props.size[2]};
    height: ${props => props.size[3]};
    top: ${props => (props.toggle ? "0" : props.size[4])};
    position: absolute;
    left: ${props => (props.toggle ? "0" : "50%")};
    transform: ${props =>
    props.toggle ? "rotate(45deg)" : "translate(-50%, -50%)"};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: 0.35s;
  }
  &:after {
    content: "";
    background-color: ${props => props.color};
    width: ${props => props.size[2]};
    height: ${props => props.size[3]};
    top: ${props => (props.toggle ? "0" : props.size[5])};
    position: absolute;
    left: ${props => (props.toggle ? "0" : "50%")};
    transform: ${props =>
    props.toggle ? "rotate(135deg)" : "translate(-50%, -50%)"};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: 0.35s;
  }
`;
