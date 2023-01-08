import React from "react";

const SidebarWidgets = () => {
    return (
        <div className="col-lg-4 sidebar-widgets">
            <div className="widget-wrap">
                <div className="single-sidebar-widget newsletter-widget">
                    <h4 className="single-sidebar-widget__title">Newsletter</h4>
                    <div className="form-group mt-30">
                        <div className="col-autos">
                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Enter email"/>
                        </div>
                    </div>
                    <button className="bbtns d-block mt-20 w-100">Subcribe</button>
                </div>


                <div className="single-sidebar-widget post-category-widget">
                    <h4 className="single-sidebar-widget__title">Catgory</h4>
                    <ul className="cat-list mt-20">
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Technology</p>
                                <p>(03)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Software</p>
                                <p>(09)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Lifestyle</p>
                                <p>(12)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Shopping</p>
                                <p>(02)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Food</p>
                                <p>(10)</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="single-sidebar-widget popular-post-widget">
                    <h4 className="single-sidebar-widget__title">Popular Post</h4>
                    <div className="popular-post-list">
                        <div className="single-post-list">
                            <div className="thumb">
                                <img className="card-img rounded-0" src="img/blog/thumb/thumb1.png" alt=""/>
                                <ul className="thumb-info">
                                    <li><a href="#">Adam Colinge</a></li>
                                    <li><a href="#">Dec 15</a></li>
                                </ul>
                            </div>
                            <div className="details mt-20">
                                <a href="blog-single.html">
                                    <h6>Accused of assaulting flight attendant miktake alaways</h6>
                                </a>
                            </div>
                        </div>
                        <div className="single-post-list">
                            <div className="thumb">
                                <img className="card-img rounded-0" src="img/blog/thumb/thumb2.png" alt=""/>
                                <ul className="thumb-info">
                                    <li><a href="#">Adam Colinge</a></li>
                                    <li><a href="#">Dec 15</a></li>
                                </ul>
                            </div>
                            <div className="details mt-20">
                                <a href="blog-single.html">
                                    <h6>Tennessee outback steakhouse the
                                        worker diagnosed</h6>
                                </a>
                            </div>
                        </div>
                        <div className="single-post-list">
                            <div className="thumb">
                                <img className="card-img rounded-0" src="img/blog/thumb/thumb3.png" alt=""/>
                                <ul className="thumb-info">
                                    <li><a href="#">Adam Colinge</a></li>
                                    <li><a href="#">Dec 15</a></li>
                                </ul>
                            </div>
                            <div className="details mt-20">
                                <a href="blog-single.html">
                                    <h6>Tennessee outback steakhouse the
                                        worker diagnosed</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-sidebar-widget tag_cloud_widget">
                    <h4 className="single-sidebar-widget__title">Popular Post</h4>
                    <ul className="list">
                        <li>
                            <a href="#">project</a>
                        </li>
                        <li>
                            <a href="#">love</a>
                        </li>
                        <li>
                            <a href="#">technology</a>
                        </li>
                        <li>
                            <a href="#">travel</a>
                        </li>
                        <li>
                            <a href="#">software</a>
                        </li>
                        <li>
                            <a href="#">life style</a>
                        </li>
                        <li>
                            <a href="#">design</a>
                        </li>
                        <li>
                            <a href="#">illustration</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarWidgets;
