import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from './firebase/auth';
// import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = getAuth();

    const createAccount = async () =>{
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorMessage);
      });
    } 
      
  
    return (
      <div>
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={createAccount}>Sign Up</button>
      </div>
    );
  };

  export default SignUpCard;