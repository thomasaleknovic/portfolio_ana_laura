import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Portfólio",link:"/portfolio"},
      {name:"Contato",link:"/"},
    ];

    let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-full fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <Link to={'/'} className='font-bold text-lg text-main-pink flex cursor-pointer items-center'> Ana Laura Nazari</Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-main-pink absolute right-3 top-3 cursor-pointer md:hidden'>
        <FontAwesomeIcon name={open ? 'close':'menu'} className="fa-lg mr-3" icon={faBars} height={50}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in top- ${open ? 'top-10 pt-4':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-3'>
              <Link to={link.link} className='font-bold text-lg text-main-pink hover:text-secondary-color duration-500'>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className="text-main-pink hidden md:block">
        <a href="https://www.linkedin.com/in/ana-laura-nazari-a12683155/" target='_blank'>
            <FontAwesomeIcon className="fa-xl mr-3" icon={faLinkedin} height={50}/>
        </a>
        <a href="https://www.instagram.com/analaura_nazari/" target='_blank'>
            <FontAwesomeIcon className="fa-xl" icon={faInstagramSquare} />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Nav

