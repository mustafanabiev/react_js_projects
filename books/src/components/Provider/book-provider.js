import React from "react";

const {
    Provider: BookProvider,
    Consumer: BookConsumer
} = React.createContext();

export {
    BookConsumer,
    BookProvider
}