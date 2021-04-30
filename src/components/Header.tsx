import {HashRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import './../App.css';
import React from "react";

export const Header=()=> {
    return (
        <header>
            <div className={"wrapperLink"}>
                <NavLink to="/">Войти</NavLink>
                <NavLink to="/Login">Логин</NavLink>
                <NavLink to="/Prophail">Профайл</NavLink>
                <NavLink to="/RecoveryPassport">Паспорт</NavLink>
                <NavLink to="/Registor">регистрация</NavLink>
                <NavLink to="/TestComponent">тест</NavLink>
            </div>
        </header>
    );
}
