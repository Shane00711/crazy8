import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './components/login/login';
import { Registration } from './components/registration/registration';
import { Landing } from './components/landing/landing';
import { NotFound } from './components/notfound/notfound';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/reg" component={Registration} exact />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
