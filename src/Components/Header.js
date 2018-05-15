import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "oldlace",
    padding: "1rem",
    boxSizing: "border-box",
    textAlign: "center"
  },
  navbar__img: {
    boxShadow: "0px 1px 2px #555"
  },
  navbar__img__hover: {
    ":hover": {
      boxShadow: "0px 1px 10px #555"
    }
  },
  hover: {
    ":hover": {
      backgroundColor: "red"
    }
  },
  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
});

class Header extends React.Component {
  render() {
    return (
      <div className={css(styles.header)}>
        <h1> This is header </h1>
        <img
          className={css(styles.navbar__img__hover, styles.navbar__img)}
          src="https://www.logocowboy.com/wp-content/uploads/2017/03/cool-panda-logocowboy2.png"
          width="200px"
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
