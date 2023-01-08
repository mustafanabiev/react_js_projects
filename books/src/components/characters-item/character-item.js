import React from "react";
import {Link} from "react-router-dom";

const CharacterItem = ({item, index}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td><Link to={`/characters/${item.id}`}>{item.name}</Link></td>
            <td>{item.gender}</td>
            <td>{item.culture}</td>
            <td>{item.born}</td>
        </tr>
    )
}

export default CharacterItem;
