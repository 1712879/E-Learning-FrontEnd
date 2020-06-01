import React, { useState } from 'react';
import Header from './users/Components/Header.user';
import Body from './users/Components/Body.user';
import Footer from './users/Components/Footer.user';
import ProductDetail from './users/Components/ProductDetail.user';
import Modal from './users/Components/Modal.user';
import { Switch, Route } from 'react-router-dom';
import './users/style/style.css';
import Profile from './users/Components/Profile.user';
import {product_p4} from './users/data';

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
                    cart={cart}
                    listLove={listLove}
                    searchKey={searchKey} 
                    handleSeachKey={handleSeachKey} 
                    data={product_p4}/>
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
            <Modal type="login" title="Login" usernameRef__Login={usernameRef__Login} passwordRef__Login={passwordRef__Login} handleSubmit={handleLogin}/>
            <Modal type="signup" title="Sign Up" emailRef__SignUp={emailRef__SignUp} usernameRef__SignUp={usernameRef__SignUp} passwordRef__SignUp={passwordRef__SignUp} handleSubmit={handleSignUp}/>
        </>
    )

    
}