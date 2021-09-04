import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navigation from "../Pages/Navigation"
import { Link } from "react-router-dom";
const imgPath = process.env.PUBLIC_URL;

function Profile() {
    const [user, setUser] = useState('')

useEffect(() => {
    let userLocal = JSON.parse(localStorage.user)

    setUser(userLocal)

}, [])
 
    return (
        <div className="container Profile-container">

            <div className="row">
                <div className="col-12">

                    <Navigation />

                    <div className="profile_pic_container">
                        <img src={`${imgPath}./img/Profile_Backgroud.png`} class="img-responsive" width="100%" />
                    </div>
                    <div className="Pic_A">
                        <img src={user.profilePicture} alt={user.firstName} className="profile_img" /><br></br><br></br>
                        <input type="text" name="bio_in" class="bio_in" placeholder="Add Your Biography"/><br></br><br></br>
                        <input type="button" name="submit_Post" class="submit_Post" value="Add Biography" placeholder="submit_Post"/>

                    </div>
                    <div className="profile_name">
                        <h1>{user.firstName}  {user.lastName}</h1>
                        
                        <p className="text-left">About</p>
                        <p>{user.Bio}</p>
                    </div>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>STACK</td>
                                <td>{user.stack}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Phone. NO</td>
                                <td>{user.phoneNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <Link path to="/editprofile"> <strong>Edit</strong></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
