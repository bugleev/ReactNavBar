import React from "react";
import {
  IconWrapper,
  HamburgerIcon
} from "../Styled Components/HamburgerStyles";

class Hamburger extends React.Component {
  state = {
    toggle: this.props.options.initialState,
    color: this.props.options.color || "#efefef",
    sizes: {
      s: ["25px", "25px", "15px", "2px", "-6px", "8px"],
      m: ["50px", "50px", "30px", "3px", "-9px", "12px"],
      l: ["80px", "80px", "50px", "4px", "-12px", "16px"]
    }
  };

  toggle = () => {
    this.props.options.toggle && this.setState({ toggle: !this.state.toggle });
    return this.props.click();
  };

  render() {
    const size = this.state.sizes[this.props.options.size];
    const { toggle } = this.state;
    return (
      <IconWrapper
        size={size}
        onClick={this.toggle}
        hide={this.props.sidebarOpen}
        className="hamburger-icon"
        data-testid="hamburger"
      >
        <HamburgerIcon color={this.state.color} size={size} toggle={toggle} />
      </IconWrapper>
    );
  }
}

export default Hamburger;
