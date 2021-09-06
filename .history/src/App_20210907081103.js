import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import UseCaseUseState from './components/UseCaseUseState/UseCaseUseState';

function App() {
  return (
    <Router>
      <Home />
      <UseCaseUseState />
    </Router>
  );
};

export default App;
