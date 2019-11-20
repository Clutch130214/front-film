import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Home/components/Dashboard';
import Register from './Login/components/Register';
import Login from './Login/components/Login';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/login' component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
