import React, {Component} from "react";
import Header from "../header";
import HeroBanner from "../hero-banner";
import {BlogServiceProvide} from "../provider/service/service-context";
import BlogService from "../../service";
import BlogPostArea from "../blog-post-area/blog-post-area";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "../login";
import Register from "../register/register";

class App extends Component {

    blogService = new BlogService()

    render() {
        return (
            <BlogServiceProvide value={this.blogService}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <HeroBanner/>
                            <BlogPostArea/>
                        </Route>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                    </Switch>
                </Router>
            </BlogServiceProvide>
        )
    }
}

export default App;
