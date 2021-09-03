import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from "axios";
import Footer from '../Pages/Footer';
import './SignUp.css'
import { Link } from 'react-router-dom';
const imgPath = process.env.PUBLIC_URL;

function SignUp() {
    
    const Location = useHistory()

    const [ user, setUser] = useState('')
    const [ firstName, setFirstName] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ email, setEmail] = useState('')
    const [ phoneNumber, setPhoneNumber] = useState('')
    const [ userName, setuserName] = useState('')   
    const [ stack, setStack] = useState('FrontEnd')
    const [ password, setPassword] = useState('')


    const HandleSign = async (e) => {
        e.preventDefault()
        const dataSign = { firstName, lastName, email, phoneNumber, userName, stack, password};
        console.log(dataSign);
        try {
            let res = await axios.post(
              "https://ict-del-gram-app.herokuapp.com/api/users/signup",
              {
                userName,
                firstName,
                lastName,
                email,
                phoneNumber,
                stack,
                password,
              }
            );
            alert("Registration successful");
            Location.push('/Login')
          
            
          } catch (error) {
            console.error(error);
            alert (error?.response?.data?.message);
          }
        };
      
    

    return (
        <div className="container">
            <div className="row gx-3 section">
                <div className="col-md-6 ">
                <div className="container Sign_Up ">
                    <div>
                        <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                    </div>
                    <div className="centred">
                    <form >
                        <div class="mb-3">
                             <input type="email" class="form-control" 
                             id="Name" placeholder="First Name" 
                             value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control"
                              id="Name" placeholder="Last Name" 
                              value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>

                        <div class="mb-3">
                             <input type="email" class="form-control" 
                             id="Name" placeholder="Email"
                             value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="UserName"
                              value={userName} onChange={(e) => setuserName(e.target.value)}/>
                        </div>

                        <div class="mb-3">
                        <div class="row  align-items-center">
                            <div class="col-6">
                                <input type="text" class="form-control" 
                                id="Name" placeholder="Mobile Number"
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                            </div>
                            <div className="col-6">
                                <select id="Stack" class="form-select" value={stack} onChange={(e) => setStack(e.target.value)} >
                                    <option >FrontEnd</option>
                                    <option >Backend</option>
                                    <option >Andriod</option>
                                    <option >UI/UX</option>
                                </select>
                            </div>
                           
                        </div>
                        
                        </div>

                        <div className="btn_google">

                            <div class="mb-3">
                                <input type="password" class="form-control" 
                                id="Name" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                       
                            <button type="button" class="btn btn-primary" onClick={HandleSign}>Create Account</button>
                        
                        </div>

                    </form>

                   </div>
                </div>
                    {/* instagram Image */}
                    <div className="container">
                        <div>
                            <Link to="/login">
                                <button type="button" class="btn btn-light btn-account">Already Have an Account?  Sign In</button>
                            </Link>
                        </div>

                        <div  className="get">
                           <a className="get" href="#">Get App</a>
                        </div>
                        <div>
                            <img src={`${imgPath}/img/google_play.png`} alt="SignUP" className="google_img"/>
                        </div>

                    </div>
                </div>

                <div className="col-md-6">
                {/* image Column */}
                    <div className="col-md-6">
                        <img className="signup_img" src={`${imgPath}/img/SignUp.png`} alt="SignUP"/>
                    </div>
                </div>
            </div>

           <Footer/>

        </div>
    )
}

export default SignUp
