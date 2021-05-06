import React from 'react';
import {Route, Switch} from "react-router-dom";
import {EnteringNewPassword} from "./EnteringNewPassword";

import {Prophail} from "./proPhail";
import {RecoveryPassport} from "./RecoveryPassport";
import {TestComponent} from "./TestComponent";
import Error404 from "./Error404";
import {RegistorBybl} from "./Registor/RegistorBybl";
import {Login} from "./Login";

export const Roters=()=> {
    return (
        <Switch>
            <Route exact path="/" render={() => <EnteringNewPassword/>}/>
            <Route path="/Login" render={() => <Login/>}/>
            <Route path="/Prophail" render={() => <Prophail/>}/>
            <Route path="/RecoveryPassport" render={() => <RecoveryPassport/>}/>
            <Route path="/Registor" render={() => <RegistorBybl/>}/>
            <Route path="/TestComponent" render={() => <TestComponent/>}/>
            <Route render={() => <Error404/>}/>
        </Switch>
    );
}
