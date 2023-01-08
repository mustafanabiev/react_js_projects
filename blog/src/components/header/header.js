import React from "react";
import NavbarMenu from "./navbar-menu";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <NavbarMenu/>
                            <div className='row' style={{
                                minWidth:'200px'
                            }}>
                                <div className='col-6'>
                                    <Link to='/login'>Sing In</Link>
                                </div>
                                <div className='col-6'>
                                    <Link to='/login'>Sing Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
