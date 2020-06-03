import React, { useState, useEffect } from 'react';
import Header from './users/Components/Header.user';
import Body from './users/Components/Body.user';
import Footer from './users/Components/Footer.user';
import ProductDetail from './users/Components/ProductDetail.user';
import Modal from './users/Components/Modal.user';
import { Switch, Route } from 'react-router-dom';
import './users/style/style.css';
import Profile from './users/Components/Profile.user';
import { product_p4 } from './users/data';
import {GoogleLogout } from 'react-google-login';
// Sign Up ref
const emailRef__SignUp = React.createRef();
const usernameRef__SignUp = React.createRef();
const passwordRef__SignUp = React.createRef();

// Login ref
const usernameRef__Login = React.createRef();
const passwordRef__Login = React.createRef();

//SeachInput
const searchKey = React.createRef();

export const App = () => {

    const [isAuth, setAuth] = useState(false);
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const [listLove, setListLove] = useState([]);

    const setItemCart = (obj) => {
        setCart(cart => [...cart, obj]);
    }

    const setItemLove = (obj) => {
        setListLove(cart => [...listLove, obj]);
    }

    const handleLogin = () => {
        console.log(usernameRef__Login.current.value)
        console.log(passwordRef__Login.current.value)
        //TODO
    }

    const handleSignUp = () => {
        console.log(emailRef__SignUp.current.value)
        console.log(usernameRef__SignUp.current.value)
        console.log(passwordRef__SignUp.current.value)
        //TODO
    }

    const handleSeachKey = () => {
        console.log(searchKey.current.value);
    }


    return (
        <>
            <div className="row">
                <Header
                    setAuth={() => setAuth(false)}
                    isAuth={isAuth}
                    user={user}
                    cart={cart}
                    listLove={listLove}
                    searchKey={searchKey}
                    handleSeachKey={handleSeachKey}
                    data={product_p4} />
            </div>


            <Switch>
                <Route path="/course/:coursename"><ProductDetail title="detail" /></Route>
                <Route path="/profile" component={Profile} />
                <Route path="/">
                    <Body
                        setCart={setItemCart}
                        setLove={setItemLove}
                    />
                </Route>
            </Switch>

            {/* <Footer /> */}
            {
                !isAuth ?
                    (
                        <>
                            <Modal
                                type="login"
                                title="Login"
                                usernameRef__Login={usernameRef__Login}
                                passwordRef__Login={passwordRef__Login}
                                handleSubmit={handleLogin}
                                setAuth={() => setAuth(true)}
                            />

                            <Modal
                                type="signup"
                                title="Sign Up"
                                emailRef__SignUp={emailRef__SignUp}
                                usernameRef__SignUp={usernameRef__SignUp}
                                passwordRef__SignUp={passwordRef__SignUp}
                                handleSubmit={handleSignUp}
                                setAuth={() => setAuth(true)}
                            />
                        </>
                    ) :
                    (
                        <div class="modal fade" id='logout' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Log Out</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <GoogleLogout
                                            clientId="38247720221-gp1ed27vo351svv6nbpiqbvj52bick1o.apps.googleusercontent.com"
                                            buttonText="Logout"
                                            render={renderProps => (
                                                <div className="btn-logingoogle">
                                                    <img style={{width: '50px', height: '50px'}} src="https://image.flaticon.com/teams/slug/google.jpg"/>
                                                    <a onClick={renderProps.onClick} disabled={renderProps.disabled} data-dismiss="modal">Logout</a>
                                                </div>
                                                
                                                
                                              )}
                                            onLogoutSuccess={() => setAuth(false)}
                                        >
                                        </GoogleLogout>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        {/* <button type="button" class="btn btn-primary" onClick={props.handleSubmit}>{props.title}</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }

        </>
    )


}