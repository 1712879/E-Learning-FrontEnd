import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ image, name, price, setCart, setLove }) => {
    return (
        // <Link style={{textDecoration:"none"}} to={`/course/${name}`}>
        <div class="card mr-1" style={{ width: "14rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <div>
                    <h5 style={{height: '50px'}} class="row card-title title-product">{name}</h5>
                    <p class="row card-text">...</p>
                    <p class="row card-text">{price}</p>
                </div>
                
                <div>
                    <a onClick={() => setCart({ image: image, name: name, price: price })} class="btn btn-addcart">
                        <img className="btn-cart" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_shoppictbasket_1484336511-1.png" />
                    </a>
                    <a onClick={() => setLove({ image: image, name: name, price: price })} class="btn btn-addcart">
                        <img className="btn-heart" src="https://lh3.googleusercontent.com/proxy/K2m_F4pKtfql5nNC0WUaL4u-yG3HYYC4f16x4WrTzeKxhvLiz1PThfWsypQtGmnoW4xRsgYqyclOFVuqvHJ3-Zcf85_mvqPZfydrgN7NTGFYrfvesP2CEUxFTVOYL6etN8FspWcb5r-jh5U" />
                    </a>

                    <a href={`/course/${name}`} class="btn btn-outline-primary btn-see-detail">See detail</a>
                </div>
            </div>
        </div>
        // </Link>
    )
}

export default Card;