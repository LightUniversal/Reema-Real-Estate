import React, { useState } from 'react'
import { FaServicestack, FaBars, FaHome, FaPhone, FaInfoCircle, FaSignOutAlt,  } from  "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    
  return (
    <header className='fixed top-0 w-full z-30 flex justify-between border-b border-slate-800 bg-black text-white p-5 items-center'>
        <h2 className=' font-bold text-2xl'>
            Reema<span className=' text-slate-400'>-Estate</span>
        </h2>
        <nav>
            <button onClick={() => { setToggle(prev => !prev)}} className=' absolute md:hidden inline-block top-6 text-2xl right-5'>
                <FaBars />
            </button>
           
                <ul className= { toggle == false ? " animate__animated animate__fadeInDown hidden md:flex md:flex-nowrap flex-wrap md:flex-row flex-col md:relative absolute right-0 top-16 md:top-0 md:right-0 md:w-full py-4  bg-black md:bg-transparent md:py-0 w-60 gap-10 items-center" : ' animate__animated animate__fadeInDown flex md:flex-nowrap flex-wrap md:flex-row flex-col md:relative absolute right-0 top-16 md:top-0 md:right-0 md:w-full py-4  bg-black md:bg-transparent md:py-0 w-60 gap-10 items-center'}>
                <li>
                    <Link to={"/"} className=' font-medium items-center flex gap-2'>
                        Home <FaHome className=' text-slate-400' />
                    </Link>
                </li>
                <li>
                    <Link to={"/info"} className=' font-medium items-center flex gap-2'>
                        About <FaInfoCircle className=' text-slate-400' />
                    </Link>
                </li>
                
                <li>
                    <a to={"/quiz"} className=' font-medium items-center flex gap-2'>
                        Contact <FaPhone className=' text-slate-400' />
                    </a>
                </li>
                <li>
                    <a to={"/"} className=' font-medium items-center flex gap-2'>
                        Properties <FaServicestack  className=' text-slate-400' />
                    </a>
                </li>
                <li>
                    <a to={"/"} className=' font-medium items-center flex gap-2 bg-red-500 px-3 py-3 rounded-md'>
                        Logout <FaSignOutAlt />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header