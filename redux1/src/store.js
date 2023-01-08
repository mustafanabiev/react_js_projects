import {createStore} from "redux";
import counter from "./reduce";

const store = createStore(counter)

export default store;