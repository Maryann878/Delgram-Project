import axios from 'axios';
import React from 'react'
import './ProfilePost.css'
const imgPath = process.env.PUBLIC_URL;
function ProfilePost({ posts }) {

const handleLike = async (id) => {
    try {
        let token = JSON.parse(localStorage.token)
        let res = await axios.get(`https://ict-del-gram-app.herokuapp.com/api/post/updatelike/${id}`,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': "multipart/form-data"
                }
            })

        alert('Post liked succesfully');
        localStorage.setItem('user', JSON.stringify(res.data.data))
            window.location.reload()

    } catch (err) {
        console.log(err.message);

    }
}
    return (

        <div className="container ProfilePsot-container">
            {posts && posts.map(post => (
                <div className="row containerBaby" key={post._id}>
                    <div className="col-md-2 image">
                        <img src={post?.userid.profilePicture} alt="" className="feed_img" />
                    </div>
                       

                    {/* New Feeds and Text Area */}
                    <div className="col-md-10">
                        <div className="d-flex flex-row ">
                            <div className="col-6  d-flex justify-content-start">
                                <h4 className="users_post_name username ">{post.userid.userName}</h4>
                                <img src={`${imgPath}./img/feed_icon_blue_tick.png`} alt="smiley" className="feed_icon blue-tick" />
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <img src={`${imgPath}./img/feed_icon_three_dots.png`} alt="smiley" className="feed_icon dot" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-start location" >
                            <h6>{post.userid.location} </h6>
                        </div>
                        <div className="post_text">
                            <p className="text">{post.title} 
                            </p>
                        </div>
                        <div className="post_img ">
                            <img src={post?.Image_url[0]} class="img-responsive" width="100%" className="postImage" />
                        </div>
                        <h6 className="d-flex justify-content-start align-items-center"><span><img src={`${imgPath}./img/feed_icon_redheart.svg`} alt="smiley" className="feed_icon" /></span>{post.noOflikes}</h6>
                        <div className="d-flex flex-row icons">
                            <div className="col-6 d-flex justify-content-start">
                                <img src={`${imgPath}./img/feed_icon_blackheart.svg`} alt="smiley" className="feed_icon" onClick={() => handleLike(post._id)}/>
                                <img src={`${imgPath}./img/feed_icon_comment.svg`} alt="gif" className="feed_icon" />
                                <img src={`${imgPath}./img/feed_icon_retweet.png`} alt="instagram_icon" className="feed_icon" />
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <img src={`${imgPath}./img/feed_icon_envelop.svg`} alt="video" className="feed_icon" />
                            </div>
                        </div>
                    <p className="text_time">{(post.dateCreated)}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfilePost
