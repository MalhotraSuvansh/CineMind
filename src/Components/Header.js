import React from 'react'
import logo from '../Utils/cinemind-logo.png'

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-20">
        <img 
            className="w-44 md:w-52 object-contain mix-blend-screen drop-shadow-[0_2px_12px_rgba(229,9,20,0.6)] cursor-pointer"
            src={logo} 
            alt="Logo" 
        />
    </div>
  )
}

export default Header