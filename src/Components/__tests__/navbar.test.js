import React from "react";
import ReactDOM from "react-dom";
import Navbar from ".././Navbar";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

test("render correct height when given prop 'height'", () => {
  const div = document.createElement("div");
  const height = "200";
  ReactDOM.render(<Navbar height={height} />, div);
  const navbarPanel = div.querySelector(".navbar-panel");
  expect(navbarPanel.style.height).toBe(`${height}px`);
});

test("render only children with prop 'data-navlink'", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Navbar>
      <li>
        <div data-navlink="true">Test</div>
      </li>
      <p data-navlink="true">Apple</p>
      <a>Soda</a>
    </Navbar>,
    container
  );
  expect(container.textContent).not.toMatch("Soda");
});

test("click on a hamburger icon fires the event", () => {
  const container = document.createElement("div");
  const click = jest.fn();
  ReactDOM.render(
    <Navbar>
      <li data-navlink="true">
        <div className="naf" onClick={click}>
          Test
        </div>
      </li>
      <p data-navlink="true">Apple</p>
      <a>Soda</a>
    </Navbar>,
    container
  );
  window.resizeTo = (400, 400);
  const hamburgerIcon = container.querySelector(".naf");

  const clickDiv = new window.Event("click", { bubbles: true });
  hamburgerIcon.dispatchEvent(clickDiv);
  expect(click).toBeCalled();
});
