import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer' // snapshots
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Display from '../display/Display';
import Controls from '../controls/Controls'
import Dashboard from './Dashboard';

afterEach(() => {
  // console.log(document.body.outerHTML);
});

describe('<Dashboard />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders component', () => {
    render(<Dashboard />)
  });

  describe('<Controls /> Events', () => {
    it('should display lock gate and open gate when close gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      getByText(/lock gate/i);
      getByText(/open gate/i);
    });

    it('should display lock gate and close gate when open gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/open gate/i));
      getByText(/lock gate/i);
      getByText(/close gate/i);
    });

    it('should display unlock gate and open gate when lock gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/lock gate/i));
      getByText(/unlock gate/i);
      getByText(/open gate/i);
    });

    it('should display lock gate and open gate when unlock gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/lock gate/i));
      fireEvent.click(getByText(/unlock gate/i));
      getByText(/lock gate/i);
      getByText(/open gate/i);
    });
  });

  describe('<Display /> Events', () => {
    it('should display unlocked and closed when close gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      getByText(/unlocked/i);
      getByText(/closed/i);
    });

    it('should display unlocked and open when open gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/open gate/i));
      getByText(/unlocked/i);
      getByText(/open/i);
    });

    it('should display locked and closed when lock gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/lock gate/i));
      getByText(/locked/i);
      getByText(/closed/i);
    });

    it('should display unlocked and closed when unlock gate is clicked', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText(/close gate/i));
      fireEvent.click(getByText(/lock gate/i));
      fireEvent.click(getByText(/unlock gate/i));
      getByText(/unlocked/i);
      getByText(/closed/i);
    });
  })
});

