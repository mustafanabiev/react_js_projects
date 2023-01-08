import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
