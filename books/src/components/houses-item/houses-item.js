import React from "react";
import {Link} from "react-router-dom";

const HousesItem = ({item, index}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td><Link to={`/houses/${item.id}`}>{item.name}</Link></td>
            <td>{item.region}</td>
            <td>{item.coatOfArms}</td>
            <td>{item.words}</td>
        </tr>
    )
}

export default HousesItem;
