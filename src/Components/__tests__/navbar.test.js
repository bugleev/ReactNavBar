import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  Simulate,
  getByText,
  cleanup,
  renderIntoDocument,
  fireEvent
} from "react-testing-library";
import Navbar from ".././Navbar";

afterEach(cleanup);
test("renders without crashing", () => {
  renderIntoDocument(<Navbar />);
});

test("render correct height when given prop 'height'", () => {
  const height = "200";
  const { container } = render(<Navbar height={height} />);
  const navbarPanel = container.querySelector(".navbar-panel");
  expect(navbarPanel.style.height).toBe(`${height}px`);
});

test("render only children with prop 'data-navlink'", () => {
  const { container } = render(
    <Navbar>
      <li data-navlink="true">
        <div>Test</div>
      </li>
      <p data-navlink="true">Apple</p>
      <a>Soda</a>
    </Navbar>
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
  const sidebarBefore = getByTestId("sidebar").style.left;
  Simulate.click(getByTestId("hamburger"));
  const sidebarAfter = getByTestId("sidebar").style.left;
  expect(sidebarBefore).not.toEqual(sidebarAfter);
});

test("navbar sticks on scroll", () => {});
