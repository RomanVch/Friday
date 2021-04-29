import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, HashRouter} from "react-router-dom";
import './App.css';
import Error404 from "./components/Error404";
import {EnteringNewPassword} from "./components/EnteringNewPassword";
import {Login} from "./components/Login";
import {Registor} from "./components/Registor";
import {RecoveryPassport} from "./components/RecoveryPassport";
import {TestComponent} from "./components/TestComponent";
import {Prophail} from "./components/Prophail";

function App() {
  return (
      <HashRouter>
    <div className="App">

      <Switch>
        <Route exact path="/" render={() => <EnteringNewPassword/>}/>
        <Route path="/Login" render={() => <Login/>}/>
        <Route path="/Prophail" render={() => <Prophail/>}/>
        <Route path="/RecoveryPassport" render={() => <RecoveryPassport/>}/>
        <Route path="/Registor" render={() => <Registor/>}/>
        <Route path="/TestComponent" render={() => <TestComponent/>}/>
        <Route path={'/404'} render={()=><Error404/>}/>
      </Switch>
    </div>
        </HashRouter>
  );
}

export default App;
