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
                    <div>
                        <img src={user.profilePicture} alt={user.firstName} className="profile_img" />

                    </div>
                    <div className="profile_name">
                        <h1>{user.firstName}</h1>
                        <h1>{user.lastName}</h1>
                        <p className="text-left">About</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero?
                            Tempore nesciunt libero veritatis aperiam possimus vel animi nam enim earum
                            laborum, ducimus beatae, tempora minus recusandae est. Voluptatum, aspernatur?</p>
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
