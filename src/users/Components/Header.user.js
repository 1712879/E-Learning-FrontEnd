import React from 'react';
import SeachInput from './SeachInput.user';
import '../style/header.css';

const Header = React.forwardRef((props) => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                </ul>

                <SeachInput searchKey={props.searchKey} handleSeachKey={props.handleSeachKey} />

                <ul class="navbar-nav ml-auto header-right">
                    <li class="nav-item header-icon header-bell">
                        <a class="nav-link" href="#" data-toggle="collapse" data-target="#multiCollapse--Bell" aria-expanded="false" aria-controls="multiCollapse--Bell">
                            {/* <i class="fa fa-bell"></i> */}
                            <img className="iconpng" src="https://i.ya-webdesign.com/images/bell-logo-transparent-background-png-5.png" />
                        </a>

                        <div class="collapse multi-collapse collapse-cart" id="multiCollapse--Bell">
                            <div class="card card-body box" style={{ "color": "black" }}>
                                {
                                    props.data.map(m => {
                                        return (
                                            <div className="item-container">
                                                <div className="item-image">
                                                    <img src={m.image} />
                                                </div>
                                                <div className="item-info">
                                                    <p className="item-title">{m.name}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </li>

                    <li class="nav-item header-icon header-heart">
                        <a class="nav-link" href="#" data-toggle="collapse" data-target="#multiCollapse--heart" aria-expanded="false" aria-controls="multiCollapse--heart">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" className="iconpng" />
                        </a>

                        <div class="collapse multi-collapse collapse-cart" id="multiCollapse--heart">
                            <div class="card card-body box" style={{ "color": "black" }}>
                                {
                                    props.listLove.length == 0 ?
                                        <div>
                                            <p>Empty...</p>
                                        </div> :
                                        props.listLove.map(m => {
                                            return (
                                                <div className="item-container">
                                                    <div className="item-image">
                                                        <img src={m.image} />
                                                    </div>
                                                    <div className="item-info">
                                                        <p className="item-title">{m.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </li>

                    <li class="nav-item header-icon header-cart">
                        <a class="nav-link" href="#" data-toggle="collapse" data-target="#multiCollapse--cart" aria-expanded="false" aria-controls="multiCollapse--cart">
                            {/* <i class="fa fa-shopping-cart" ></i> */}
                            <img className="iconpng" src="https://cdn4.iconfinder.com/data/icons/logistics-1-filled-outline/64/Logistic_And_Delivery_1_-_PS_Style_-_1-14-512.png" />
                        </a>

                        <div class="collapse multi-collapse collapse-cart" id="multiCollapse--cart">
                            <div class="card card-body box" style={{ "color": "black" }}>
                                {
                                    props.cart.length == 0 ?
                                        <div>
                                            <p>Empty...</p>
                                        </div> :
                                        props.cart.map(m => {
                                            return (
                                                <div className="item-container">
                                                    <div className="item-image">
                                                        <img src={m.image} />
                                                    </div>
                                                    <div className="item-info">
                                                        <p className="item-title">{m.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </li>

                    {
                        !props.isAuth ? 
                        (
                        <>
                        <li class="nav-item login login-li">
                            <a class="nav-link" data-toggle="modal" data-target="#login" >Login</a>
                        </li>
                        <li class="nav-item login signup-li">
                            <a class="nav-link" data-toggle="modal" data-target="#signup" >SignUp</a>
                        </li>
                        </>
                        ) : (
                            <li class="nav-item login login-li">
                            <a class="nav-link" data-toggle="modal" data-target="#logout" >Logout</a>
                        </li>
                        )
                    }

                    


                </ul>
            </div>


        </nav>
    )
})

export default Header;