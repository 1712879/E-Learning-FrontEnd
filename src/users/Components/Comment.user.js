import React from 'react'

const Comment = (props) => {
    return (
        <div className="row course--content d-flex flex-column">

            <div className="row">
                <h3 className="pl-5">4.0/5</h3>
                <div className="mt-3">
                    <img className="star-icon" src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-11-16809.png" />
                    <img className="star-icon" src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-11-16809.png" />
                    <img className="star-icon" src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-11-16809.png" />
                    <img className="star-icon" src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-11-16809.png" />

                </div>
            </div>
            <div>
                <div className="row pl-4">
                    <div className="col-3">
                        <span className="d-flex flex-row">
                            <img className="avt-icon" src="https://lh3.googleusercontent.com/-kNfERYKTL1A/Xq0eFrHaxSI/AAAAAAAAHKQ/9_7YFJ2yvboFjvB7KbhRNK0oWvTHs4vOQCEwYBhgL/w500/thuong-thuong-2.jpg" />

                            <div className="ml-3">
                                <h4 >Admin</h4>
                                <p>30/04/2020</p>
                            </div>

                        </span>

                    </div>
                    <div className="col-9">
                        <p>Things are explain damn good. Questions asked were solved within a day. Best for beginners in Spring and Hibernate. Resources are good to learn. Spring REST and Spring Boot should have been in more detail explanations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;