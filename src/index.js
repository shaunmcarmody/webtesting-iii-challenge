import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Dashboard from './dashboard/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));


// Gate
// Gate defaults to unlocked and open
// Gate cannot be closed or open if it's locked

// Dashboard
// Dashboard renders Display Component and Controls Component

// Display Component
// Display Component displays if gate is open/closed and if it is locked/unlocked
// Display Component displays 'Closed' if the closed prop is true and 'Open' if otherwise
// Display Component displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when Display Component is locked or closed use the red-led class
// when Display Component is unlocked or open use the green-led class

// Controls Component
// Controls Component provide buttons to toggle the closed and locked states.
// Controls Component buttons' text changes to reflect the state the door will be in if clicked
// The closed toggle button is disabled if the gate is closed on Controls Component
// The locked toggle button is disabled if the gate is open on Controls Component


