import React from 'react';
import { useState } from 'react';

const Modal = React.forwardRef((props) => {
    
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