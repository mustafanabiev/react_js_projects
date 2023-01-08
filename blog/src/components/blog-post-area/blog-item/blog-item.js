import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

const BlogItem = ({item}) => {
    return (
        <div className="single-recent-blog-post">
            <div className="thumb">
                <img className="img-fluid" src={item.imageBlog} alt=""/>
                <ul className="thumb-info">
                    <li><a href="#"><i className="ti-user"/>{item.author}</a></li>
                    <li><a href="#"><i className="ti-notepad"/><Moment
                        format="YYYY-MM-DD HH:mm">{item.createAt}</Moment></a></li>
                    <li><a href="#"><i className="ti-themify-favicon"/>2 Comments</a></li>
                </ul>
            </div>
            <div className="details mt-20">
                <a href="blog-single.html">
                    <h3>{item.title}</h3>
                </a>
                <p className="tag-list-inline">Tag: <a href="#">travel</a>, <a href="#">life
                    style</a>, <a
                    href="#">technology</a>, <a href="#">fashion</a></p>
                <p>{item.body}</p>
                <a className="button" href="#">Read More <i className="ti-arrow-right"/></a>
            </div>
        </div>
    )
}

export default BlogItem;
