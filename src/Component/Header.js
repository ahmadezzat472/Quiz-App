import React from 'react';
import './Header.css'
import logo from './img/logo.png';
import img from './img/img3.png';

function Header() {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='the logo' />
            <p className='title'>  اختبار اضطرابات الطعام </p>
            <img className='img' src={img} alt='img' />
        </div>
    )
}

export default Header;
