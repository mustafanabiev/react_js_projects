import React from "react";

const Pagination = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                  <span aria-hidden="true">
                                      <i className="ti-angle-left"></i>
                                  </span>
                            </a>
                        </li>
                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Next">
                                  <span aria-hidden="true">
                                      <i className="ti-angle-right"></i>
                                  </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination;
