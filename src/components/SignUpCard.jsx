import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import SignUpButton from './AuthButton';
import ghosty from '../assets/Gosthy.png'


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
        console.log(errorCode);
        console.log(errorMessage);
      });
    } 
      
  
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
                  Register to Mooody
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
                <SignUpButton 
                  label={"Sign Up"} 
                  handleClick={createAccount} />
              </div>

          </div>
        </section>
      </main>
      // <div>
      //   <h2>Sign Up</h2>
      //   <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      //   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      //   <button onClick={createAccount}>Sign Up</button>
      // </div>
    );
  };

  export default SignUpCard;