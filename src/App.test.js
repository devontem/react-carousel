import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a shallow copy without crashing', () => {
  shallow(<App />);
});

it('App has two child components', () => {
  var wrapper = shallow(<App />);
  expect(wrapper.props().children.length).toEqual(2);
});

it('Application state contains sliderData', () => {
  var wrapper = shallow(<App />);
  expect(wrapper.state('sliderData')).toBeTruthy();
  expect(wrapper.state('sliderData').length).toEqual(7);
});

it('Application state contains title', () => {
  var wrapper = shallow(<App />);
  var title = "MORE FOR YOUR KINGDOM";
  expect(wrapper.state('title')).toBeTruthy();
  expect(wrapper.state('title')).toEqual(title);
});