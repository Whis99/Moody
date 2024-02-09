import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import SignInButton from './SignInButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate('/moodtrack')

      } else {
        // User is signed out
        // ...
      }
    });

  };

  return (
    <main>

      <section className="relative py-3 bg-white-smoke shadow-xl rounded-lg">
        <div className="container mx-auto px-20">
            <h1 className=" font-bold mt-10 text-center font-quicksand text-dark-blue pb-5 ">Sign In</h1>

                  <TextInput label='E-mail' placeholder="Entrer email adress" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <PasswordInput label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div className="px-10">
                  <SignInButton label={"Sign in"} handleClick={handleSignIn} />
                                 
                </div>

            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
              
            </div>
        </div>
      </section>
    </main>
    
  );
};

export default SignIn;