import React, {useEffect} from 'react';
import {HashRouter, Redirect} from "react-router-dom";
import './App.css';
import {Roters} from "./components/Routes";
import {Header} from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {authMeThunk} from "./bll/auth-reducer";

function App() {
    const auth= useSelector<AppStateType,boolean>(state=>state.authReducer.auth)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(authMeThunk())},[])

    return (
        <HashRouter>
            {!auth && <Redirect to="/login" />}
            <Header/>

                <Roters/>

        </HashRouter>
    );
}

export default App;
