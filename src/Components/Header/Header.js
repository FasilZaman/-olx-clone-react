import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Authcontext, FirebaseContext } from '../../store/FIrebasecontext';
function Header() {
  const {user} = useContext(Authcontext)
  const {firebase} = useContext(FirebaseContext)
  const History = useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          History.push('/')
        }}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user ?<span>  user :{user.displayName}   </span>
         : <span onClick={()=>{
          History.push('/login')
        }}> Login </span> }
          <hr />
        </div>
         { user && <span onClick={()=>{
            firebase.auth().signOut();
            History.push('/')
          }} > <b> Logout</b></span> } 

        <div className="sellMenu" onClick={()=>{
          History.push('/create')
        }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
