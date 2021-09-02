import React, { useState} from 'react'
import axios from 'axios'
import './Feeds.css'
const imgPath = process.env.PUBLIC_URL;

function Feeds() {

    const [imgUrl, setImgUrl] = useState('');
    const [imgUpload, setImgUpload] = useState('');
    const [ title, setTitle] = useState('')

    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
        // use this to display the image on the DOM
        setImgUrl(URL.createObjectURL(e.target.files[0]));
        
        // this is what you will send to the backend
        setImgUpload(e.target.files[0]);
        setImgUrl(e.target.files[0]);
      };


      const HandleSubmitFeeds =  () => {
            let formData = new FormData();
            formData.append('photo', imgUpload);
            console.log(title, formData)
          axios.post('https://ict-del-gram-app.herokuapp.com/api/post/new', {
            Image_url: formData,
                title : title
              })
              .then((res) =>  {

                console.log('Feed Uploaded succesfully');
              })
              .catch((error)  => {
                console.log(error);
              });
      }

 

    return (
      <div className="container feed-container">
          <div className="row">
              <div className="col-md-2">
                <img  src={`${imgPath}./img/Profile.jpg`} alt="" className="feed_img" />
              </div>

              {/* New Feeds and Text Area */}
              <div className="col-md-10">
                  <h6>Make Gram</h6>
                  <form>
                        <div class="form-group">
                            <textarea class="form-control" 
                            id="exampleFormControlTextarea1" rows="4"
                            title={title} onChange={(e) => setTitle(e.target.value)}></textarea>
                        </div>
                        <div className=" d-flex flex-row icon">
                            <div className="col-6 d-flex justify-content-start">
                                <img src={`${imgPath}./img/feed_icon_smiley.svg`} alt="smiley"  className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_gif.svg`} alt="gif" className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_instagram.svg`} alt="instagram_icon" className="feed_icon" />
                                <img src={`${imgPath}./img/feed_icon_picture.svg`} alt="Picture"  className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_video.svg`} alt="video"  className="feed_icon"/>
                                <span><input type="file" onChange={handleImageChange} className="upload"/></span>
                                {/* <button onClick={handleImageUpload}> Upload</button> */}
                            </div>
                            {/* <div className="col-6 post" button-container> */}
                                <button type="button" class="btn btn-primary" onClick={HandleSubmitFeeds}>Post</button>
                            {/* </div> */}
                        </div>
                  </form>

              </div>
          </div>
      </div>
    )
}

export default Feeds
