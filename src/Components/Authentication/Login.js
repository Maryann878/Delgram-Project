import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";  
import axios from 'axios';
import Footer from '../Pages/Footer';
import './Login.css'
const imgPath = process.env.PUBLIC_URL;

function Login() {

    const Location = useHistory()

    const [ userName, setuserName] = useState('') 
    const [ password, setPassword] = useState('')
    const [ user, setUser] = useState('')


    const HandleSignIn = async (e) => {
        e.preventDefault();
        console.log(userName, password)
        console.log("submitted");
        try {
          let res = await axios.post(
            "https://ict-del-gram-app.herokuapp.com/api/users/login",
            {
              userName,
              password,
            }
          );
          let user = res.data.user
          let token = res.data.token
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('token', JSON.stringify(token))
          setUser(user);
    
    
          Location.push("/Home")
    
        } catch (error) {
            alert (error?.response?.data?.message);

        }
      };
    

    return (
        <>
       
        <div className="container">
        <div className="row gx-3 section">
            <div className="col-md-6  my-auto mx-auto">
            <div className="container Sign_Up ">
                <div>
                    <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                </div>
                <div className= "centred">

                    <form d-flex justify-content-center >
`                       <div class="mb-3">
                         <input type="email" class="form-control" 
                         id="Name" placeholder="UserName"
                         value={userName} onChange={(e) => setuserName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                         <input type="password" class="form-control" 
                         id="Name" placeholder="Password"
                         value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                
                        <div className="btn_google">              
                        <button type="button" class="btn btn-primary" onClick={HandleSignIn}>Login</button>
                    
                        </div>

                    </form>
                </div>
               
            </div>
                {/* instagram Image */}
                <div className="container">
                    <div>
                    <Link to="/">
                        <button type="button" class="btn btn-light btn-account">Don't Have an Acount&nbsp;? &nbsp;&nbsp; &nbsp;&nbsp;Sign Up</button>
                    </Link>
               
           
                    </div>

                    <div>
                       <a className="get" href="#">Get App</a>
                    </div>
                    <div>
                        <img src={`${imgPath}/img/google_play.png`} alt="SignUP" className="google_img"/>
                    </div>

                </div>
            </div>

            <div  className="col-md-6">
            {/* image Column */}
                <div className="col-md-6">
                    <img className="signup_img" src={`${imgPath}/img/SignUp.png`} alt="SignUP"/>
                </div>
            </div>
        </div>
        
        <Footer/>
       
    </div>

   </> 
    )
}

export default Login
