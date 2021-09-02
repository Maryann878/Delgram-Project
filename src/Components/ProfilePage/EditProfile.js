import React, { useState } from 'react'
import './EditProfile.css'
import Navigation from "../Pages/Navigation"
import axios from 'axios';

const imgPath = process.env.PUBLIC_URL;

function EditProfile() {
    const [imageFile, setImageFile] = useState('')

    const handleImageChange =  (e) => {
        setImageFile(e.target.files[0])
        
    }
    const handleImageUpload = async () => {
        try {
            let token = JSON.parse(localStorage.token)
            // let myHeaders = new Headers();
            // myHeaders.append("Authorization", token);
            let formdata = new FormData();

            formdata.append("images", imageFile);

        
            let res = await axios.post('https://ict-del-gram-app.herokuapp.com/api/users/611fb2ee270bfd00164ebd5f', formdata, {
                headers: {
                    'Authorization': token
                }
            })
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="container EditProfile-container">
                            <Navigation/>
            <div className="row">
                <div className="col-md-12">
                    <div className="profile_pic_container">
                        <img src={`${imgPath}./img/Profile_Backgroud.png`} class = "img-responsive" width = "100%" />   
                    </div>
                    <div>
                        <img  src={`${imgPath}./img/Profile.jpg`} alt="" className="profile_img" />

                        <input type="file" onChange={handleImageChange} />
                        <button onClick={handleImageUpload}>Upload Picture</button>
                    </div>
                    <div className="profile_name">
                        <h1>Jasmine Ben</h1>
                        <p className="text-left">About</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero? 
                        Tempore nesciunt libero veritatis aperiam possimus vel animi nam enim earum 
                        laborum, ducimus beatae, tempora minus recusandae est. Voluptatum, aspernatur?</p>
                    </div>
                    <div >
                    <h1>Edit Personal Info</h1>
                    <form class=" mx-auto">
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <div className="mb-3">
                        <select id="Stack" class="form-select" placeholder="Stack" >
                                    <option>FrontEnd</option>
                                    <option>Backend</option>
                                    <option>Andriod</option>
                                    <option>UI/UX</option>
                                </select>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <button type="button" class="btn btn-primary">Update</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
