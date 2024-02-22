import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header />
        <div className='bg-cover bg-center absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background' />
        </div>
        <form className='absolute w-4/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input className='bg-gray-700 p-3 my-4 w-full rounded-sm' type='text' placeholder='Full Name'/>}
          <input className='bg-gray-700 p-3 my-4 w-full rounded-sm' type='text' placeholder='Email or Phone number'/>
          <input className='bg-gray-700 p-3 my-4 w-full rounded-sm' type='password' placeholder='Password'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login;