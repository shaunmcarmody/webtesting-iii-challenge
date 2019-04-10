import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer' // snapshots
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from './Dashboard';

afterEach(() => {
  // console.log(document.body.outerHTML);
});

describe('<Display />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders component', () => {
    render(<Dashboard />)
  });

  // it('renders unlocked/lock button', () => {
  //   const { getByText } = render(<Display />);
  //   getByText(/unlocked/i);
  //   // getByText('Locked'); // case sensitive to prevent match with unlocked;
  // });

  // it('renders open/close button', () => {
  //   const { getByText } = render(<Display />);
  //   // getByText(/close/i);
  //   getByText(/open/i);
  // });
});

