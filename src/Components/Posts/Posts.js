import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FIrebasecontext';
import './Post.css';
import {useHistory} from 'react-router-dom'
import { PostContext } from '../../store/Postcontext';

function Posts() {
  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const History = useHistory()
  const {setPostDetails} = useContext(PostContext)
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allposts = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allposts)
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {products.map( (product)=>{
         return (
          <div
          className="card" 
          onClick={()=>{
            localStorage.setItem('productDetails',JSON.stringify(product))
            setPostDetails(product)
            History.push('/view')
          }}
        >
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={product.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <span className="kilometer">{product.category}</span>
            <p className="name">{product.name}</p>
          </div>
          <div className="date">
            <span> <b> {product.createdAt} </b> </span>
          </div>
        </div>
         )
        })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;