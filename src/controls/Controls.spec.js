import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer' // snapshots
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Controls from './Controls';

afterEach(() => {
  // console.log(document.body.outerHTML);
});

describe.skip('<Controls />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders component', () => {
    render(<Controls />)
  });

  it('renders lock button', () => {
    const { getByText } = render(<Controls />);
    // getByText(/unlock gate/i);
    getByText(/lock gate/i);
  });

  it('renders close button', () => {
    const { getByText } = render(<Controls />);
    // getByText(/unlock gate/i);
    getByText(/close gate/i);
  });
});