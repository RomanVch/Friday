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
                <NavLink to="/RecoveryPassport">Восстановление</NavLink>
                <NavLink to="/set-new-password">Новый пароль</NavLink>
                <NavLink to="/Registor">Регистрация</NavLink>
                <NavLink to="/TestComponent">тест</NavLink>
                <NavLink to="/Pacs">паки</NavLink>
            </div>
        </header>
    );
}
