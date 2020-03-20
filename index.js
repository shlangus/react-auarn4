import React, { Component } from 'react';
import { render } from 'react-dom';
import { Issue, Good } from './issue';
import './style.css';

const App = () => {
  return <Issue />;
}

render(<App />, document.getElementById('root'));
