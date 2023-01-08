import React from "react";
import {BlogServiceConsumer} from "./service-context";

const withBlogService = (mapMethodsToProps) => (Component) => (props) => {
    return (
        <BlogServiceConsumer>
            {(blogService) => {
                const data = mapMethodsToProps(blogService)
                return <Component {...props} {...data} />
            }}
        </BlogServiceConsumer>
    )
}

export default withBlogService;
