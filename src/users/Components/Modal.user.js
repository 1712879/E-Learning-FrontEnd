import React from 'react';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
const Modal = React.forwardRef((props) => {
    const responseGoogle = (response) => {
        let {email, googleId} = response.profileObj;
        console.log(email)
        props.setAuth();
    }

    return (
        <>
            <div class="modal fade" id={props.type} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                {
                                    
                                    props.type == "signup" ? 
                                    (
                                    <>
                                    <div class="form-group">
                                        <label class="col-form-label">Email: </label>
                                        <input ref={props.emailRef__SignUp} type="text" class="form-control" id="email" name="email"/>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-form-label">Username: </label>
                                        <input ref={props.usernameRef__SignUp} type="text" class="form-control" id="username" name="username"/>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-form-label">Password:</label>
                                        <input ref={props.passwordRef__SignUp} type="password" class="form-control" id="password" name="password"/>
                                    </div>
                                    <GoogleLogin
                                        clientId="38247720221-gp1ed27vo351svv6nbpiqbvj52bick1o.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                    </>
                                    ) : 
                                    (
                                    <>
                                    <div class="form-group">
                                        <label class="col-form-label">Username: </label>
                                        <input ref={props.usernameRef__Login} type="text" class="form-control" id="username" name="username"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Password:</label>
                                        <input ref={props.passwordRef__Login} type="password" class="form-control" id="password" name="password"/>
                                    </div>
                                    <GoogleLogin
                                        clientId="38247720221-gp1ed27vo351svv6nbpiqbvj52bick1o.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        render={renderProps => (
                                            <div className="btn-logingoogle">
                                                <img style={{width: '50px', height: '50px'}} src="https://image.flaticon.com/teams/slug/google.jpg"/>
                                                <a onClick={renderProps.onClick} disabled={renderProps.disabled} data-dismiss="modal">Login with Google</a>
                                            </div>
                                            
                                            
                                          )}
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        
                                        cookiePolicy={'single_host_origin'}
                                    />
                                    </>
                                    )
                                    
                                }
                            </form>
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={props.handleSubmit}>{props.title}</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
})

export default Modal;