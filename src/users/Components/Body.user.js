import React from 'react';
import Card from './Card.user';
import '../style/body.css';
import {subjects, product_p1, product_p2, product_p3} from '../data';
const Body = (props) => {
    
    return (
        <>
            {/* slides show */}
            <div className="slides body--container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg" class="d-block " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg" class="d-block " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg" class="d-block" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="container body-container">

                {/* categories */}
                
                <div className="categories">
                    {
                        subjects.map(s => {
                            return(
                                <div key={s.name} className="col-2">
                                    <div className="items">
                                        <p>{s.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>

                {/* topics */}
                <div className="row topics d-flex flex-column">
                    <p className="card-text topic-title">Top courses in Development</p>

                    <div className="product-list d-flex flex-wrap">
                        <>
                            {
                                product_p1.map(p => {
                                    return(
                                        <Card 
                                            key={p.name} 
                                            image={p.image} 
                                            name={p.name} 
                                            price={p.price}
                                            setCart={props.setCart}
                                            setLove={props.setLove}
                                            />
                                    )
                                })
                            }
                        </>
                    </div>


                    <nav aria-label="Page navigation example" className="mt-3">
                        <ul class="pagination float-right">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                {/* topics */}
                <div className="row topics d-flex flex-column">
                    <p className="card-text topic-title">Students are viewing</p>

                    <div className="product-list d-flex flex-wrap">
                        <>
                            {
                                product_p2.map(p => {
                                    return(
                                        <Card 
                                            key={p.name} 
                                            image={p.image} 
                                            name={p.name} 
                                            price={p.price} 
                                            setCart={props.setCart}
                                            setLove={props.setLove}
                                            />
                                    )
                                })
                            }
                        </>
                    </div>


                    <nav aria-label="Page navigation example" className="mt-3">
                        <ul class="pagination float-right">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                {/* topics */}
                <div className="row topics d-flex flex-column">
                    <p className="card-text topic-title">Top courses in Programming Languages</p>

                    <div className="product-list d-flex flex-wrap">
                        <>
                            {
                                product_p3.map(p => {
                                    return(
                                        <Card 
                                            key={p.name} 
                                            image={p.image} 
                                            name={p.name} 
                                            price={p.price} 
                                            setCart={props.setCart}
                                            setLove={props.setLove}
                                            />
                                    )
                                })
                            }
                        </>
                    </div>


                    <nav aria-label="Page navigation example" className="mt-3">
                        <ul class="pagination float-right">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}

export default Body;