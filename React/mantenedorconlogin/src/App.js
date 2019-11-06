import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route path='/' component={DashBoard}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;