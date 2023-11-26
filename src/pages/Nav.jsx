import React from 'react'
import Logo from '../assets/TastyBowl.png'
import './Nav.css'

function Nav() {
  return (
    <nav>
        <div className='Nav__Left'>
            <figure>
                <img className='logo' src={Logo}></img>
            </figure>
        </div>
        <div className='Nav__Right'>

        </div>
    </nav>
  )
}

export default Nav