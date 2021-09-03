import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navigation from './Navigation'
import ProfilePost from '../ProfilePage/ProfilePost'
import Footer from './Footer'
import Feeds from './Feeds'


function Home() {
  const [posts, setPosts] = useState('')

  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'))

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }

  useEffect(() => {

    async function getData() {
      try {
        const { data } = await axios.get("https://ict-del-gram-app.herokuapp.com/api/post/allpost",
          { headers })
        setPosts(data.data)

      } catch (error) {

      }
    };

    getData()
  }, [])


  return (
    <div>
      <Navigation />
      <Feeds />
      <ProfilePost posts={posts} />
      <Footer />
    </div>


  )
}

export default Home
