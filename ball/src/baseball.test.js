import React from 'react';
// import ReactDom from 'react-dom';
import { render } from 'react-testing-library';

import App from './App.js'

it('renders successfully', () => {
    render(<App />)
});