import React, { useEffect } from 'react'
import axios from 'axios'
import Navigation from './Navigation'
import ProfilePost from '../ProfilePage/ProfilePost'
import Footer from './Footer'
import Feeds from './Feeds'


function Home() {

            const token = JSON.parse(localStorage.getItem('token'));
            const user =    JSON.parse(localStorage.getItem('user'))
        
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        
          useEffect(() => {

            async function getData() {
              try {
                const response = await axios.post("https://ict-del-gram-app.herokuapp.com/api/post/allpost",
                 { headers })
                console.log(response);
                // setRequest(data)
        
              } catch (error) {
        
              }
            };
        
            getData()
          }, [])
          

    return (
            <div>
                <Navigation/>
                <Feeds/>
                <ProfilePost/>
                <Footer/>
            </div>
    
       
    )
}

export default Home
