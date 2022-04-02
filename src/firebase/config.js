import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAKSK3gUDA7Hb2DRjhs7bX6UjhprpT3AhA",
    authDomain: "demoolx-4a00d.firebaseapp.com",
    projectId: "demoolx-4a00d",
    storageBucket: "demoolx-4a00d.appspot.com",
    messagingSenderId: "117481395215",
    appId: "1:117481395215:web:0332a26c14a96a1f287f7a",
    measurementId: "G-C1YRXLBKME"
  };

  export default firebase.initializeApp(firebaseConfig)