import React, {Component} from "react";
import CharacterItem from "../characters-item";
import BooksService from "../../service/service";
import {Link, withRouter} from "react-router-dom";
import withBooksConsumer from "../hooks/with-books-consumer";


class CharactersList extends Component {



    state = {
        loading: true,
        data: [],
        props: {}
    }

    setData = () => {
        const {bookService} = this.props
        const page = (new URLSearchParams(this.props.location.search)).get('page')
       bookService.getCharacters(page).then((data) => {
            this.setState({
                data: data.json,
                loading: false,
                props: data.props
            })
        })
    }

    componentDidMount() {
        this.setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.search !== this.props.location.search) {
            this.setData()
        }
    }

    render() {
        const {loading, data} = this.state
        if (loading) {
            return <p>Loading...</p>
        }
        const {prev, next, last, first} = this.state.props;
        return (
            <div className=" book-list">
                <h1>Character list</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Culture</th>
                        <th scope="col">Born</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                        return <CharacterItem key={index} item={item} index={index}/>
                    })}

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {first &&
                        <li className="page-item"><Link className="page-link"
                                                        to={{
                                                            pathname: '/characters',
                                                            search: '?page=' + first
                                                        }}>First</Link>
                        </li>}
                        {prev &&
                        <li className="page-item"><Link className="page-link"
                                                        to={{
                                                            pathname: '/characters',
                                                            search: '?page=' + prev
                                                        }}>Prev</Link></li>}
                        {next &&
                        <li className="page-item"><Link className="page-link"
                                                        to={{
                                                            pathname: '/characters',
                                                            search: '?page=' + next
                                                        }}>Next</Link></li>}
                        {last &&
                        <li className="page-item"><Link className="page-link"
                                                        to={{
                                                            pathname: '/characters',
                                                            search: '?page=' + last
                                                        }}>Last</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withBooksConsumer(withRouter(CharactersList));
