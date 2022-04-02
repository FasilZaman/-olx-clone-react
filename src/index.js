import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FIrebasecontext'
import firebase from './firebase/config'
import Context from './store/FIrebasecontext'

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
<Context>
<App />
</Context>    
</FirebaseContext.Provider>

, document.getElementById('root'));
