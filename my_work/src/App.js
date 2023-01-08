import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Diologs from "./components/Diologs/Diologs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/> } />
                    <Route path='/diologs' render={ () => <Diologs store={props.store}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
