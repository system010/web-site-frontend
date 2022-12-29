import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './Header.css'
const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header' >
            <div className='container '>
                <img className='logo' src='vamos1.png' alt='' width='230' height='230' />

                <ul className={click ? 'contain active' : 'contain'}>
                    <li className='items'>
                        <Link className='btn' to='/form'>Log In </Link>
                    </li>
                    <li className='itmes'  >
                        <a href='/'>  <BsFillCartFill className='icon' /> </a>

                    </li>
                    <li className='items'>
                        <a href='/footer'>

                            About Vamos
                        </a>
                    </li>
                    <li className='items'>
                        <a href='/'>Main Page </a>
                    </li>
                </ul>

                <div onClick={handleClick} className='con' >
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>

            </div>
        </div >
    )
}

export default Header