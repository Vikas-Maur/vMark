import { useState } from 'react';

import './App.css';
import SignInPage from './MyComponents/SignInPage';
import AppPage from './MyComponents/AppPage';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCUj0QM_c59V94n4daKBP5FtuvIbY5BkIs",
  authDomain: "v-mark.firebaseapp.com",
  projectId: "v-mark",
  storageBucket: "v-mark.appspot.com",
  messagingSenderId: "275671542099",
  appId: "1:275671542099:web:89e47b0d3dc10bf3e419a6",
  measurementId: "G-QBDH5BDXZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars

const auth = getAuth()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function App() {

  const [user, setUser] = useState(null);

  const signInUser = async (provider)=>{
    try{
      const result = await signInWithPopup(auth,provider);
      console.log(provider,result.user);
      setUser(result.user);
    }catch(e){
      console.error(e);
    }
  }

  const signInWithGoogle = ()=> signInUser(googleProvider);
  const signInWithFacebook = ()=> signInUser(facebookProvider);
  const signOutUser = ()=> {
    signOut(auth);
    setUser(null);
  };  

  return (
    <div className="App font-nunito bg-black text-neutral-200">
      {!user?<SignInPage signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />:<button className='hidden' onClick={signOutUser}>Sign Out</button>}
      {user? <AppPage />:""}
    </div>
  );
}

export default App;
