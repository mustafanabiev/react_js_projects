import React, {Component} from "react";
import BooksService from "../../service/service";
import {withRouter} from "react-router-dom";

class CharactersDetail extends Component {
    charactersService = new BooksService()

    state = {
        character: {},
        loading: true
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.charactersService.getCharacterDetail(id).then((data) => {
            this.setState({
                character: data,
                loading: false
            })
        })


    }

    render() {
        console.log(this.state)
        const {character, loading} = this.state
        if (loading) {
            return <p>Loading...</p>
        }
        return (
            <ul className="list-group">
                <li className="list-group-item"><b>Aliases: {character['aliases'].join()}</b></li>
                <li className="list-group-item"><b>Name: {character['name']}</b></li>
                <li className="list-group-item"><b>born: {character['born']}</b></li>
                <li className="list-group-item"><b>father: {character['father']}</b></li>
                <li className="list-group-item"><b>mother: {character['mother']}</b></li>
                <li className="list-group-item"><b>playedBy: {character['playedBy']}</b></li>
                <li className="list-group-item"><b>tvSeries: {character['tvSeries']}</b></li>


            </ul>
        )
    }
}

export default withRouter(CharactersDetail);
