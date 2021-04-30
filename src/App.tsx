import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import {Roters} from "./components/Routes";
import {Header} from "./components/Header";

function App() {
    return (
        <HashRouter>
            <Header/>

                <Roters/>

        </HashRouter>
    );
}

export default App;
