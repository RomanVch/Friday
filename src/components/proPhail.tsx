import React, {useEffect} from 'react';
import {recoveryPasTC} from "../bll/recovery-reducer";
import SuperButton from "./SuperComponents/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logOutThunk} from "../bll/auth-reducer";
import {AppStateType} from "../bll/store";
import {Redirect, Route} from 'react-router-dom';

export const Prophail = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.auth)
    return (

        <div>
            {/*{!isAuth && <Redirect to="/Login" />}*/}
            <p>Профайл</p>
            <SuperButton onClick={() => dispatch(logOutThunk())} names={"LogOut"}/>

        </div>
    );
}
