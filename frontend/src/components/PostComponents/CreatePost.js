import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'


export default function CreatePost () {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if(userInfo){
      setUsername(userInfo.name)
    }

    if(title.length > 0 && image.length > 0){
      dispatch(createPost({
        title, 
        image, 
        username
      })
      )
    };

  };

  const successCallBack = (e) => {
    setImage(e.info.url)
  }

  const failureCallBack = (e) => {
    console.log(e);
  }

  return(
    <>
      <WidgetLoader />
      { userInfo 
      
        ?
          <div className="form create">
            <div className="post-header">
                <h3>Upload Meme</h3>
            </div>
            <div className='ulParent'>
              <ul className="form-container">
                <li>
                  <label htmlFor="title">Title</label>
                  <input 
                  type="text"
                  placeholder="Required" 
                  name="title"
                  value={title} 
                  id="title" 
                  onChange={(e) => setTitle(e.target.value)}>
                  </input>
                </li>
                <li className='uploadButton'>
                  { image ?

                    <img src = {image} alt='' />
                  :

                    <Widget
                      sources={['local', 'camera', 'dropbox']} // set the sources available for uploading -> by default
                      // all sources are available. More information on their use can be found at 
                      // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                      sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys 
                      // and ID's as an object. More information on their use can be found at 
                      // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                      resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                      cloudName={'djrbfvpit'} // your cloudinary account cloud name. 
                      // Located on https://cloudinary.com/console/
                      uploadPreset={'ttotjoct'} // check that an upload preset exists and check mode is signed or unisgned
                      buttonText={'Upload Image'} // default 'Upload Files'
                      style={{
                            color: 'black',
                            border: '1px solid gray',
                            width: '10rem',
                            backgroundColor: '#f5c329',
                            borderRadius: '0.5rem',
                            height: '2.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '1rem',
                          }} // inline styling only or style id='cloudinary_upload_button'
                      folder={'sportsBook'} // set cloudinary folder name to send file
                      cropping={false} // set ability to crop images -> default = true
                      onSuccess={(e) => successCallBack(e)} // add success callback -> returns result
                      onFailure={(e) => failureCallBack(e)} // add failure callback -> returns 'response.error' + 'response.result'
                      logging={true} // logs will be provided for success and failure messages, 
                      // set to false for production -> default = true
                      customPublicId={'sample'} // set a specific custom public_id. 
                      // To use the file name as the public_id use 'use_filename={true}' parameter
                      eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
                      use_filename={false} // tell Cloudinary to use the original name of the uploaded 
                      // file as its public ID -> default = true,

                      // 👇 FOR SIGNED UPLOADS ONLY 👇

                      // generateSignatureUrl={'http://my_domain.com/api/v1/media/generate_signature'} // pass the api 
                      // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
                      apiKey={713115678661528} // cloudinary API key -> number format
                      accepts={'application/json'} // for signed uploads only -> default = 'application/json'
                      contentType={'application/json'} // for signed uploads only -> default = 'application/json'
                      withCredentials={true} // default = true -> check axios documentation for more information
                      unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make 
                      // the Public ID unique, and just use the normalized file name -> default = true
                    />
                  }
                  

                </li>
                <li>
                  <button onClick={submitHandler} className="button primary">Create</button>
                </li>
              </ul>
            </div>
          </div>
      
        :

        <div className="form create">
          <h1 className="post-header">You must be signed in to upload a meme</h1>
        </div>
      }
        
    </>
  )
}

