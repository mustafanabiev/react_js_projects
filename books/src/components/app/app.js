import React, {Component} from "react";
import BookList from "../book-list";
import CharactersList from "../characters-list";
import './app.css'
import HousesList from "../houses-list";
import BooksService from "../../service/service";
import {Switch, Route, Link} from "react-router-dom";
import BookDetail from "../book-detail/book-detail";
import CharactersDetail from "../characters-detail/characters-detail";
import HousesDetail from "../houses-detail/houses-detail";
import ErrorBoundary from "../error-boundary";
import {BookProvider} from '../Provider/book-provider'

class App extends Component {

    bookService = new BooksService();


    render() {


        return (
            <BookProvider value={this.bookService}>
            <div className="container jumbotron">
                <Link to='/'>
                    <button className="btn btn-primary">Books</button>
                </Link>

                <Link to='/characters'>
                    <button className="btn btn-primary">Characters</button>
                </Link>

                <Link to='/houses'>
                    <button className="btn btn-primary">Houses</button>
                </Link>

                <hr/>
                <Switch>

                    <Route exact path="/">
                        <ErrorBoundary key={1}>
                            <BookList/>
                        </ErrorBoundary>
                    </Route>
                    <Route exact path="/characters">
                        <ErrorBoundary key={2}>
                            <CharactersList/>
                        </ErrorBoundary>
                    </Route>
                    <Route exact path="/houses">
                        <ErrorBoundary key={3}>
                            <HousesList/>
                        </ErrorBoundary>

                    </Route>
                    <Route exact path="/books/:id">
                        <BookDetail/>
                    </Route>
                    <Route exact path="/characters/:id">
                        <CharactersDetail/>
                    </Route>
                    <Route exact path="/houses/:id">
                        <HousesDetail/>
                    </Route>
                </Switch>
            </div>
            </BookProvider>
        )
    }
}

export default App;
