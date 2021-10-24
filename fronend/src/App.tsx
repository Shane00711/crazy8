import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './components/login/login';
import { Registration } from './components/registration/registration';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/reg" component={Registration} exact />
      </Switch>
    </main>
  );
}

export default App;
