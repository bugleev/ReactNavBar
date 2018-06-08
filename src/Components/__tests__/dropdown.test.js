import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  Simulate,
  getByText,
  cleanup,
  wait,
  renderIntoDocument,
  fireEvent
} from "react-testing-library";
import Dropdown from ".././Dropdown";

afterEach(cleanup);
test("dropdown renders without crashing", () => {
  renderIntoDocument(<Dropdown />);
});

test("renders anchor text from prop", () => {
  const anchorText = "afafaf";
  const { getByTestId } = render(
    <Dropdown anchorText={anchorText} data-navlink="true">
      <ul>
        <li>
          <a href="https://google.com">Link 1. LOng one</a>
        </li>
        <li>Link 2. Reaaly reaaly long one</li>
        <a>Link 3</a>
        <li>Link 4</li>
      </ul>
    </Dropdown>
  );
  const dropdownText = getByTestId("DropdownAnchor");
  expect(dropdownText.textContent).toMatch(anchorText);
});

test("dropdown children are hidden by default", () => {
  const { getByTestId, container } = render(
    <Dropdown anchorText="text" data-navlink="true">
      <ul>
        <li>
          <a href="https://google.com">Link 1. LOng one</a>
        </li>
        <li>Link 2. Reaaly reaaly long one</li>
        <a>Link 3</a>
        <li>Link 4</li>
      </ul>
    </Dropdown>
  );
  const childrenWrapper = getByTestId("DropdownBody");
  expect(childrenWrapper.style.visibility).toMatch("hidden");
});

xtest("dropdown shows up on mouseover", () => {
  const { getByTestId, container } = render(
    <Dropdown anchorText="text" data-navlink="true" breakpointHit={false}>
      <ul>
        <li>
          <a href="https://google.com">Link 1. LOng one</a>
        </li>
        <li>Link 2. Reaaly reaaly long one</li>
        <a>Link 3</a>
        <li>Link 4</li>
      </ul>
    </Dropdown>
  );

  Simulate.mouseEnter(getByTestId("DropdownAnchor"));
  expect(getByTestId("DropdownBody").style.visibility).toMatch("visible");
});

test("dropdown in sideBar shows up on click", () => {
  const { getByTestId, container } = render(
    <Dropdown anchorText="text" data-navlink="true" breakpointHit={true}>
      <ul>
        <li>
          <a href="https://google.com">Link 1. LOng one</a>
        </li>
        <li>Link 2. Reaaly reaaly long one</li>
        <a>Link 3</a>
        <li>Link 4</li>
      </ul>
    </Dropdown>
  );
  const dropdownbodyBefore = getByTestId("DropdownSidebar").style.maxHeight;
  Simulate.click(getByTestId("DropdownAnchor"));
  const dropdownbodyAfter = getByTestId("DropdownSidebar").style.maxHeight;
  expect(dropdownbodyBefore).not.toMatch(dropdownbodyAfter);
});
