import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  Simulate,
  cleanup,
  renderIntoDocument
} from "react-testing-library";
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
  const { getByTestId } = render(
    <Navbar>
      <li data-navlink="true" className="naf">
        <div>Test</div>
      </li>
      <p data-navlink="true">Apple</p>
      <a>Soda</a>
    </Navbar>
  );
  const sidebarBefore = getByTestId("sidebar").style.zIndex;
  Simulate.click(getByTestId("hamburger"));
  const sidebarAfter = getByTestId("sidebar").style.zIndex;
  expect(sidebarBefore).not.toEqual(sidebarAfter);
});
