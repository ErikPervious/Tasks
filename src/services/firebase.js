import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgJ1QvCdhyJNFwBp49z442PXB8ubzpcDA",
  authDomain: "taks-19285.firebaseapp.com",
  databaseURL: "https://taks-19285-default-rtdb.firebaseio.com",
  projectId: "taks-19285",
  storageBucket: "taks-19285.appspot.com",
  messagingSenderId: "401184565922",
  appId: "1:401184565922:web:f96ee3e387060689af05fb",
  measurementId: "G-DRDQ7K7874"
};

firebase.initializeApp(firebaseConfig);

export default firebase;