import React from "react";
import {BookConsumer} from "../Provider/book-provider";

const withBooksConsumer = (Component) =>() =>{
    return (
        <BookConsumer>
            {
                (bookService) =>{
                    return <Component bookService={bookService}/>
                }
            }
        </BookConsumer>
    )

}
export default withBooksConsumer;