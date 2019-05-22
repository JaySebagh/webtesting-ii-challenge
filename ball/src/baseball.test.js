import React from 'react';
// import ReactDom from 'react-dom';
import { render, fireEvent } from 'react-testing-library';

import App from './App.js'
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'

it('renders successfully', () => {
    render(<App />)
    render(<Display />)
    render(<Dashboard />)
});