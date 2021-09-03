import React, { useState } from 'react'
import './EditProfile.css'
import Navigation from "../Pages/Navigation"
import axios from 'axios';

const imgPath = process.env.PUBLIC_URL;


function EditProfile() {
    const users = JSON.parse(localStorage.getItem('user'))
    // console.log(users)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userName, setuserName] = useState('')
    const [stack, setStack] = useState('FrontEnd')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [  bio, setBio] = useState('')
    //const [ gender, setGender] = useState('')


    const [imageFile, setImageFile] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0])

    }
    const handleImageUpload = async () => {
        try {
            let token = JSON.parse(localStorage.token)
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user, token)

            // let myHeaders = new Headers();
            // myHeaders.append("Authorization", token);
            let formdata = new FormData();

            formdata.append("image", imageFile);

            console.log(imageFile)


            let res = await axios.post(`https://ict-del-gram-app.herokuapp.com/api/users/${user._id}`, formdata, {
                headers: {
                    'Authorization': token,
                    'Content-Type': "multipart/form-data"
                }
            })
            alert('profile Picture Updated')
            localStorage.setItem('user', JSON.stringify(res.data.data))
            window.location.reload()
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleProfileUpdate = async () => {
        try {
            let token = JSON.parse(localStorage.token)
            let res = await axios.put(`https://ict-del-gram-app.herokuapp.com/api/users/${user._id}`,
                {
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber,
                    stack: stack,
                    password: password
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': "multipart/form-data"
                    }
                })
            localStorage.setItem('user', JSON.stringify(res.data.data))
            console.log(res.data.data);
            alert('Profile update succesfully');

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="container EditProfile-container">
            <Navigation />
            <div className="row">
                <div className="col-md-12">
                    <div className="profile_pic_container">
                        <img src={`${imgPath}./img/Profile_Backgroud.png`} class="img-responsive" width="100%" />
                    </div>
                    <div>
                        <img src={users.profilePicture} alt="" className="profile_img" />

                        <input type="file" onChange={handleImageChange} />
                        <button onClick={handleImageUpload}>Upload Picture</button>
                    </div>
                    <div className="profile_name">
                        <h1>{users.firstName} {users.lastName}</h1>
                        <p className="text-left">About</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero?
                            Tempore nesciunt libero veritatis aperiam possimus vel animi nam enim earum
                            laborum, ducimus beatae, tempora minus recusandae est. Voluptatum, aspernatur?</p>
                    </div>
                    <div >
                        <h1>Edit Personal Info</h1>
                        <form class=" mx-auto">
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder={users.firstName}
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="User Name" value={userName} onChange={(e) => setuserName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Mobile Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <select id="Stack" class="form-select" placeholder="Stack" value={stack} onChange={(e) => setStack(e.target.valuer)}>
                                    <option>FrontEnd</option>
                                    <option>Backend</option>
                                    <option>Andriod</option>
                                    <option>UI/UX</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="button" class="btn btn-primary" onClick={handleProfileUpdate}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
