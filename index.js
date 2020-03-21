import React, { Component } from 'react';
import { render } from 'react-dom';
import { Issue } from './issue';
import { IssueCmp } from './issueCmp';
import './style.css';

const App = () => {
  // With hooks:
  return <Issue />;
  // With component:
  // return <IssueCmp/>
}

render(<App />, document.getElementById('root'));
