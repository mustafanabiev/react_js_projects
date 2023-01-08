import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import BooksService from "../../service/service";

class HousesDetail extends  Component {
    housesService = new BooksService()

    state = {
        houses: {},
        loading: true
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.housesService.getHousesDetail(id).then((data) => {
            this.setState({
                houses: data,
                loading: false
            })
        })


    }
    render() {
        console.log(this.state)
        const {houses, loading} = this.state
        if (loading) {
            return <p>Loading...</p>
        }
        return (
            <ul className="list-group">
                <li className="list-group-item"><b>Name: {houses['name']}</b></li>
                <li className="list-group-item"><b>Region: {houses['region']}</b></li>
                <li className="list-group-item"><b>coatOfArms: {houses['coatOfArms']}</b></li>
                <li className="list-group-item"><b>currentLord: {houses['currentLord']}</b></li>
                <li className="list-group-item"><b>cadetBranches: {houses['cadetBranches']}</b></li>
                <li className="list-group-item"><b>Region: {houses['region']}</b></li>
                <li className="list-group-item"><b>words: {houses['words']}</b></li>
                <li className="list-group-item"><b>overlord: {houses['overlord']}</b></li>


            </ul>
        )
    }
}

export default withRouter(HousesDetail);