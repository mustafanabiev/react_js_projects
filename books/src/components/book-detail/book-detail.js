import React, {Component} from "react";
import BooksService from "../../service/service";
import {withRouter} from "react-router-dom";

class  BookDetail extends Component{
    booksService = new BooksService()

    state = {
        book: {},
        loading:true

    }

    componentDidMount() {
        const  id = this.props.match.params.id
        this.booksService.getBookDetail(id).then((data)=>{
           this.setState({
               book:data,
               loading:false
           })
        })


    }

    render() {

        console.log(this.state)
        const {book,loading} = this.state
        if (loading){
            return <p>Loading...</p>
        }
        return (
            <ul className="list-group">
                <li className="list-group-item"><b>Name: {book['name']}</b></li>
                <li className="list-group-item"><b>Authors: {book['authors'].join()}</b></li>
                <li className="list-group-item"><b>Country: {book['country']}</b></li>
                <li className="list-group-item"><b>isbn: {book['isbn']}</b></li>
                <li className="list-group-item"><b>mediaType: {book['mediaType']}</b></li>
                <li className="list-group-item"><b>publisher: {book['publisher']}</b></li>
                <li className="list-group-item"><b>released: {book['released']}</b></li>


            </ul>
        )
    }
}

export default withRouter(BookDetail);

