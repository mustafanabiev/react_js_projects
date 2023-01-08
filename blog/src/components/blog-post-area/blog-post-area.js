import React, {Component} from "react";
import withBlogService from "../provider/service/with-blog-service";
import Pagination from "./pagination";
import SidebarWidgets from "./sidebar-widgets";
import BlogItem from "./blog-item";

class BlogPostArea extends Component {
    state = {
        blogs: [],
        loading: true,
    }

    componentDidMount() {
        const {getBlogs} = this.props;
        getBlogs().then((blogs) => {
            this.setState({
                blogs,
                loading: false
            })
        })
    }

    render() {
        const {blogs, loading} = this.state;
        if (loading) {
            return <p>Loading...</p>
        }
        return (
            <section className="blog-post-area section-margin mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {blogs.map((item)=>(
                                <BlogItem key={item.id} item={item}/>
                            ))}
                            <Pagination/>
                        </div>
                        <SidebarWidgets/>
                    </div>
                </div>
            </section>
        )
    }
}

const mapMethodsToProps = (blogService) => {
    return {
        getBlogs: blogService.getBlogs
    }
}

export default withBlogService(mapMethodsToProps)(BlogPostArea);
