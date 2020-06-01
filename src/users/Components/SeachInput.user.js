import React from 'react';

const SeachInput = React.forwardRef((props) => {
    return (
        <div className="navbar-nav search-form">
            <button class="btn mr-sm-2 search-btn" onClick={props.handleSeachKey}><i class="fa fa-search"></i></button>
            <input ref={props.searchKey} class="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
})

export default SeachInput;