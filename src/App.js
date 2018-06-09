import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem } from 'react-materialize';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

//importing page components here
import Home from './pages/home';
import AddUser from './pages/addUser';
import Login from './pages/login';
import AppLoader from './components/appLoader';

function PrivateRoute({ component: Component, authed, location, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, toggleAppLoader, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const combinedProps = { ...props, toggleAppLoader };
        return authed === false ? (
          <Component {...combinedProps} />
        ) : (
            <Redirect to="/login" />
          );
      }}
    />
  );
}


class App extends Component {
  state = {
    authed: false,
    appLoading: false,
    isAdmin: false,
    username: ""
  }

  toggleAppLoader = () => this.setState({ appLoading: !this.state.appLoading, authed: true });

  render() {
    const { appLoading, authed } = this.state;
    return (
      <Router>
        <div>
          <Navbar brand='AKYSB' right style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
            <li><Link to="/" className="navbar-brand">Home</Link></li>
            <li><Link to="/login" className="navbar-brand">Login</Link></li>
            <li><Link to="/add" className="navbar-brand">Add User</Link></li>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              authed={authed}
              toggleAppLoader={this.toggleAppLoader}
              path="/add"
              component={AddUser}
            />
            <PublicRoute
              authed={authed}
              toggleAppLoader={this.toggleAppLoader}
              path="/login"
              component={Login}
            />
          </Switch>
          {/* {appLoading
            ? <AppLoader />
            :
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                authed={authed}
                toggleAppLoader={this.toggleAppLoader}
                path="/add"
                component={AddUser}
              />
              <PublicRoute
                authed={authed}
                toggleAppLoader={this.toggleAppLoader}
                path="/login"
                component={Login}
              />
            </Switch>
          } */}
        </div>
      </Router>
    )

  }
}

export default App;
