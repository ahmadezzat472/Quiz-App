import React from 'react';
import './Header.css'
import logo from './img/logo.png';
import img from './img/img.png';

function Header() {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='the logo' />
            <p className='title'>  اختبار اضطرابات الأكل </p>
            <img className='img' src={img} alt='img' />
        </div>
    )
}

export default Header;
