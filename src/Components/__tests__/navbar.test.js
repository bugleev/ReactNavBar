import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '.././Navbar';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});
test('render correct height when given prop', () => {
  const div = document.createElement('div');
    ReactDOM.render(<Navbar height="200" />, div);
  const navbarPanel = div.querySelector(".navbar-panel"); 
  console.log(navbarPanel.style) ;
  expect(navbarPanel.style.height).toBe(200);
});