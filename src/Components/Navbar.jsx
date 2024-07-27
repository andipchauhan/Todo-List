import React from 'react'
import logo from "/icon.png"
import dark from "/dark.svg"
import light from "/light.svg"
const Navbar = ({props}) => {

  return (
    <nav className={`flex h-14 p-3 md:px-10 justify-between bg-${props.Cbg} rounded-b-xl`}>
        <div className="logo flex items-center gap-3"><img className='h-[100%]' src={logo} alt="" />
        <img src={props.darkMode?dark:light} onClick={props.handleMode} on className='h-[90%] cursor-pointer'   alt="" /></div>
        <div className={`creator text-lg font-semibold cursor-pointer text-${props.Ctext}`}>andipchauhan</div>
    </nav>
  )
}

export default Navbar