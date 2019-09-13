import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Update from './pages/Update';

import Blank from './components/Blank';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  auth() {
      localStorage.getItem('auth')
  }
  render() {
    axios.defaults.baseURL = 'http://localhost:8000/api'
    return (
      <Router>
        <Fragment>
          <NavigationBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/create' component={Create}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/update/:id' component={Update}/>
            <Route component={Blank}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
