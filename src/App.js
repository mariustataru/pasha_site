import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/components/LogIn/Login'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/Footer" exact component={Footer} />
        <Route path="/Header" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;