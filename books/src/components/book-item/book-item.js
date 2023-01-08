import React from "react";
import {Link} from "react-router-dom";

const BookItem = ({item, index}) => {
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td><Link to={`/books/${item.id}`}>{item.name}</Link></td>
            <td>{item.authors.join()}</td>
            <td>{item.numberOfPages}</td>
            <td>{item.country}</td>
        </tr>
    )
}

export default BookItem;
