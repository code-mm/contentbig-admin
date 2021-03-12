import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Login from "./page/login/index"
import Home from "./page/home/index"

export default function App() {
    return (<BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/home"  component={Home}/>
    </BrowserRouter>)
}
