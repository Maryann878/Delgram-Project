import React, { useEffect, useState } from 'react'
import { Router, Switch, Route, Link } from "react-router-dom";
import './Navigation.css'
const imgPath = process.env.PUBLIC_URL;

function Navigation() {
    const [user, setUser] = useState('')

  useEffect(() => {
    let userLocal = JSON.parse(localStorage.user)

    setUser(userLocal)

}, [user.profilePicture])
    return (
       <div className="container Nav-container mx-auto">
           <div className="row m-0">
               <div className="col-md-4 colum_nav">
                    <img src={`${imgPath}./img/del-logo.png`} alt="" className="del_logo" />
               </div>
               <div className="col-md-4 colum_nav">
                    <div className="input-group rounded">
                        <span className="search my-auto" id="search-addon">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />       
                    </div>
               </div>
               <div className="col-md-4 colum_nav d-flex flex-row">
               <Link to="/home"><img src={`${imgPath}./img/home_icon.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/vector_icon.svg`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/notification_icon.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/add-story.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link to= "/Profile"><img  src={user.profilePicture} alt="" className="Profile_thumbnail" /></Link>
                           <Link to= "/"><input type="button" className="out" value="Log Out" placeholder="Log Out"/></Link>
               </div>
                  
                          
                
              
           </div>
       </div>
    )
}

export default Navigation
