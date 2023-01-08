import store  from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render( <App dispatch={store.dispatch.bind(store)}
                          state={store.getState()} store={store}/>,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



