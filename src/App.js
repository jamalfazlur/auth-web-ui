import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import MyHome from './components/MyHome';
import MyHeader from './components/MyHeader';
import MyLogin from './components/MyLogin';
import MyRegister from './components/MyRegister';
import MyVerification from './components/MyVerification';


class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <MyHeader navBrand="Auth Project"/>
        <div className="container card">
            <Route exact path="/" component={MyHome} />
            <Route path="/login" component={MyLogin} />
            <Route path="/register" component={MyRegister} />
            <Route path="/verify" component={MyVerification} />
          </div>
      </div>
    );
  }
}

export default App;
