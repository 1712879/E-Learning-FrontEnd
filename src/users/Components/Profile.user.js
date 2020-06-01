import React from 'react';
import '../style/profile.css';
const Profile = () => {
    return (
        <div className="row body--container profile--container ">
            <div className="col-3 profile--options">
                <div className="row profile--avt">
                    <img className="row avt" src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg"></img>
                    <h4>Full Name</h4>
                </div>
                <div className="row profile--control">
                    <h3>info</h3>
                    <h3>profile</h3>
                    <h3>payment</h3>
                    <h3>contract</h3>
                    <h3>other</h3>
                </div>
            </div>
            <div className="profile--detail">
                <p>Fullname</p>
                <p>email</p>
                <p>address</p>
                <p>payment</p>
                <p>...</p>
            </div>
        </div>
    )

}


export default Profile;