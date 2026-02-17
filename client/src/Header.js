import React from 'react';
import './Header.css';
import { Button } from '@mantine/core';
import JBDM from  './assets/javier.png';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render(){
    return <div className='headermain'>
            <div className='leftsidediv'>
            <img className='setimage' height={30} src={JBDM}></img>
            <a className='leftside'>Gabriel </a>
            </div>
            <div className='fouritems'>
                <Link to="/" className='item'>Home</Link>
                <Link to='/features' className='item'>Features</Link>
                <Link to='/about' className='item'>About</Link>
                <Link to='/links' className='item'>Links</Link>
            </div>
            <div className='rightside'>
                <Button variant='default'>Login</Button>
                <Button>Sign up</Button>    
            </div>
          </div>
  }
}

export default Header;