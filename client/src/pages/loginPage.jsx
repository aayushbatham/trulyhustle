import React from 'react'
import Navbar from '../components/Navbar'
import googleLogo from '../assets/google.webp'

const loginPage = () => {
  const handleSignInWithGoogle = () => {
    window.location.href = 'http://localhost:3000/auth/google'; 
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <button onClick={handleSignInWithGoogle} className="bg-black hover:bg-yellow-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg flex items-center">
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
    
  )
}

export default loginPage