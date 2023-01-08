import React from "react";
import ReactDom from 'react-dom'
import App from "./components/app";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";


ReactDom.render(
    // <ErrorBoundary>
        <Router>
            <App/>
        </Router>
    // </ErrorBoundary>
    , document.getElementById('root'))
