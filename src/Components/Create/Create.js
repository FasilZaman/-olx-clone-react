import React, { Fragment, useState , useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,Authcontext} from '../../store/FIrebasecontext'
import { useHistory } from 'react-router-dom';

const Create = () => {
   const {firebase} = useContext(FirebaseContext)
   const {user} = useContext(Authcontext)
   const history = useHistory()
  const [name , setName ] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  let date = new Date()
  const handleSubmit = () =>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e)=>setName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              onChange={(e)=>setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            onChange={(e)=>setPrice(e.target.value)} 
            className="input" 
            type="number" id="fname" 
            name="Price" />
            <br />
        
          <br />
          {image && <img alt="Posts" width="200px" height="200px" src={URL.createObjectURL(image)}></img>}
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
