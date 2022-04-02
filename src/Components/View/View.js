import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FIrebasecontext';
import { PostContext } from '../../store/Postcontext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  const productDetails = JSON.parse(localStorage.getItem('productDetails'))  

  useEffect(() => {
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())        
      });
    })
   
  }, [])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={productDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productDetails.price}</p>
          <span>{productDetails.name}</span>
          <p>{productDetails.category}</p>
          <span>{productDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
