import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment.user'
import '../style/detail.css';
const ProductDetail = ({ title }) => {
    let { coursename } = useParams();
    return (
        <div className="course--detail body--container">
            {/* <p className="div">Detail page <mark>{title}</mark></p>
            <p className="div">coursename:  <mark>{coursename}</mark></p> */}
            <div className="row course--title">
                <iframe className="col-5 video-trailer" width="727" height="409" src="https://www.youtube.com/embed/Zv8-hrGiGno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <div className="col-7 course-info">
                    <h3>
                        {coursename}
                    </h3>
                    <p>
                        Spring 5: Learn Spring 5 Core, AOP, Spring MVC, Spring Security, Spring REST, Spring Boot 2, Thymeleaf, JPA & Hibernate
                    </p>
                </div>
            </div>

            <div className="row course--body">
                <div className="col-8 course--content--container">
                    <div className="row course--content">
                        <h3>What you'll learn</h3>
                        <div className="row course--whatulearn">
                            <div className="col-6">
                                <p>
                                    ✔ Develop a REAL-TIME project with Spring MVC, Spring REST, Spring Boot and Hibernate CRUD ... all from SCRATCH
                                </p>

                                <p>
                                    ✔ You will TYPE IN EVERY LINE of code with me in the videos. I EXPLAIN every line of code to help you learn!
                                </p>

                                <p>
                                    ✔ LEARN key Spring 5 features: Core, Annotations, Java Config, AOP, Spring MVC, Hibernate and Maven
                                </p>
                                <p>
                                    ✔ I am a RESPONSIVE INSTRUCTOR ... post your questions and I will RESPOND in 24 hours.
                                </p>
                            </div>

                            <div className="col-6">
                                <p>
                                    ✔ Develop a REAL-TIME project with Spring MVC, Spring REST, Spring Boot and Hibernate CRUD ... all from SCRATCH
                                </p>

                                <p>
                                    ✔ You will TYPE IN EVERY LINE of code with me in the videos. I EXPLAIN every line of code to help you learn!
                                </p>

                                <p>
                                    ✔ LEARN key Spring 5 features: Core, Annotations, Java Config, AOP, Spring MVC, Hibernate and Maven
                                </p>
                                <p>
                                    ✔ I am a RESPONSIVE INSTRUCTOR ... post your questions and I will RESPOND in 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row course--content d-flex flex-column">
                        <h3>Requirements</h3>
                        <div className="d-flex flex-column pl-5">
                            <ul>
                                <li>
                                    Basic Java knowledge is required
                                </li>
                                <li>
                                    Basic HTML knowledge is helpful
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="row course--content d-flex flex-column">
                        <h3>Description</h3>
                        <div className="d-flex flex-column pl-5">
                            <p>
                                SPRING BOOT SECTION NOW INCLUDES OVER 6.5 HOURS OF NEW VIDEOS
                            </p>
                            <p>
                                #1 BEST SELLING SPRING-HIBERNATE COURSE ON UDEMY - OVER 38,000 REVIEWS - 5 STARS!
                            </p>
                            <a class="btn-group btn-group-sm text-success" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                See More
                            </a>
                        </div>

                        <div class="collapse" id="collapseExample">
                            <div class="pl-5">
                                <p>[COURSE UPDATES]:</p>
                                <ul>
                                    <li>Added Spring Boot and Thymeleaf videos ... 12 videos, 2.5 hours of new content</li>
                                    <li>Added Spring Boot videos ... 34 videos, 4 hours of new content</li>
                                    <li>Added Spring Security Role-based Registration lecture</li>
                                    <li>Added ADVANCED Spring REST videos ... 40 videos, 3 hours of new content</li>
                                    <li>Added Spring REST videos ... 18 videos, 1.5 hours of new content</li>
                                    <li>Added Spring Security User Registration Lecture</li>
                                    <li>Added Spring Security JDBC videos ... 16 new videos, 1 hour  of new content</li>
                                    <li>Added more Spring Security videos ... 52 videos, 3.5 hours of new content</li>
                                    <li>
                                        Updated course to SPRING 5, Tomcat 9 and Eclipse Oxygen
                                    </li>
                                    <li>
                                        Added Spring Security videos ... 16 new videos, 1 hour of new content
                                    </li>
                                    <li>
                                        New Advanced Hibernate videos ... 57 new videos, 4 hours of new content
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row course--content bg-secondary">
                        <h3>Course content</h3>
                    </div>
                    <div>
                        <h3 className="p-2">Student feedback</h3>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>

                <div className="col-4 course--info pt-3">
                    <h3 className="font-weight-bold text-center">INFORMATION</h3>
                    <div>
                        <div>
                            <span className="d-flex flex-row">
                                <h4 className="text-danger"><i class="fas fa-money-bill-alt"></i> $11.9</h4>
                                <strike className="ml-3 ">$99.0</strike>
                            </span>
                            <p>✅ 41 hours on-demand video</p>
                            <p>✅ 72 articles</p>
                            <p>✅ 306 downloadable resources</p>
                            <p>✅ Full lifetime access</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-secondary">Cart</button>
                            <button type="button" class="btn btn-outline-info">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;