import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Home/components/Dashboard';
import Register from './Login/components/Register';
import Login from './Login/components/Login';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmDashboard from './Home/components/FilmDashboard';
import SerieDashboard from './Home/components/SerieDashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/film/:id' component={FilmDashboard}/>
          <Route path='/serie/:id' component={SerieDashboard}/>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
