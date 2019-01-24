import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import MyHome from './components/MyHome';
import MyHeader from './components/MyHeader';
import MyLogin from './components/MyLogin';
import MyRegister from './components/MyRegister';
import MyVerification from './components/MyVerification';
import MyHasVerified from './components/MyHasVerified';
import MyUserList from './components/MyUserList';

class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <MyHeader navBrand="Auth Project"/>
        <div className="container card">
            <Route exact path="/" component={MyHome} />
            <Route path="/login" component={MyLogin} />
            <Route path="/register" component={MyRegister} />
            <Route path="/waitingverification" component={MyVerification} />
            <Route path="/verified" component={MyHasVerified} />
            <Route path="/userlist" component={MyUserList} />
          </div>
      </div>
    );
  }
}

export default App;
