import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg';
import {Nav} from './styles';


function Navbar() {
  return (
    <Nav>
       <div className="content">
        <div className="navElement">
            <GiHamburgerMenu size={30}/>
        </div>

        <div className="navElement">
            <img src="/logo.png" alt="logo"/>
        </div>

        <div className="navElement"> 
            <CgProfile size={30}/>
        </div>
        </div>
    </Nav>
  )
}

export default Navbar