import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../assets'
import { styles } from './styles'
import { navLinks } from '../constants'



const Navbar = () => {

    const [active, setActive] = useState(' ');

  return (
   <>
    <nav className="w-full flex flex-wrap py-4 px-6 items-center bg-none top-0 ">
        <div className='w-full flex flex-wrap justify-between max-w-7xl mx-auto'>
            <Link to="/" onClick={window.scrollTo(0,0)} className='flex items-center gap-2 cursor-pointer'>
                <img src={Logo} alt="" height={50} className='h-10 w-10 rounded-full object-cover' />
                <span>&nbsp;|</span>
                <p className= {` ${styles.heroSubText}text-[20px] text-white`} >&nbsp;WeatherDom</p>
            </Link>
        </div>

        <div>
            <ul className='list-none flex flex-wrap justify-between items-center  gap-10'>
               {
                 navLinks.map((Link)=>(
                    <li key={Link.id} className={`${active===Link.title? "text-white ": "text-neutral-400"}
                     flex flex-wrap hover:text-white`} onClick={()=>{setActive(Link.title)}}>
                        <a href={`#${Link.id}`}>{Link.title}</a>
                    </li>
                 ))
               }
            </ul>
        </div>
    </nav>
   </>
  )
}

export default Navbar
