import React from 'react';
import {Route, Switch} from "react-router-dom";
import {EnteringNewPassword} from "./EnteringNewPassword";

import {Prophail} from "./proPhail";
import {RecoveryPassport} from "./RecoveryPass/RecoveryPassport";
import {TestComponent} from "./TestComponent";
import Error404 from "./Error404";
import {RegistorBybl} from "./Registor/RegistorBybl";
import {Login} from "./Login";
import {SetPass} from "./SetPass";
import {RecoveryPassBybl} from "./RecoveryPass/RecoveryPassBybl";
import {Pacs} from "./pacs/pacs";

export const Roters=()=> {
    return (
        <Switch>
            <Route exact path="/" render={() => <EnteringNewPassword/>}/>
            <Route path="/Login" render={() => <Login/>}/>
            <Route path="/Prophail" render={() => <Prophail/>}/>
            <Route path="/RecoveryPassport" render={() => <RecoveryPassBybl/>}/>
            <Route path="/Registor" render={() => <RegistorBybl/>}/>
            <Route path="/set-new-password" render={() => <SetPass/>}/>
            <Route path="/TestComponent" render={() => <TestComponent/>}/>
            <Route path="/Pacs" render={() => <Pacs/>}/>
            <Route render={() => <Error404/>}/>


        </Switch>
    );
}
