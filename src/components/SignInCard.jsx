import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import LogInButton from './AuthButton';
import ghosty from '../assets/Gosthy.png'


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
      <section 
        className="relative py-3 bg-white-smoke shadow-xl 
        rounded-lg flex items-center justify-center py-12 
        px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-14 w-auto mt-3"
                src={ghosty}
              />
              <h2 className="mt-2 text-center text-lg font-quicksand font-bold text-gray-500">
                Sign in to continue to Mooody
              </h2>
            </div>

              <div className="rounded-md shadow-sm -space-y-px">
              <TextInput 
                placeholder="Email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />

              <PasswordInput 
                label='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              </div>

              <div className="group">
                <LogInButton 
                  label={"Login"} 
                  handleClick={handleSignIn} />
              </div>
          </div>
      </section>
    </main>
    
  );
};

export default SignIn;