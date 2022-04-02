import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {Authcontext,FirebaseContext} from './store/FIrebasecontext'
import Post from './store/Postcontext'



function App() {
  const {setUser} = useContext(Authcontext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
    <div>
      <Post>

      <Router>


      <Route exact path='/' >
      <Home />
      </Route>

      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/create'>
        <Create />
      </Route>

      <Route path='/view'>
        <View />
      </Route>


      </Router>
      </Post>

    </div>
  );
}

export default App;
