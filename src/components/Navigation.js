import './Navigation.css'
import logo from './Landing.png'
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


function Navigation() {
    const [modalopen, setModalOpen] = useState(false)

    return (
        <div className="Navigation">
            <div className={`open-nav ${modalopen ? 'active' : ''}`}>
                <div className='about-nav'>
                    <h2>About</h2>
                    <p>Diverr is an app that helps you find places to swim and dive with animals in an ethical environment, as well as track these swims and share with friends.</p>
                </div>
                <div className='contact-nav'>
                    <h2>Contact</h2>
                    <p onClick={() => window.location.href = 'me@theowalcot.com'}>Email us</p>                
                </div>
            </div>
            <div className="main-nav">
                <img src={logo} alt='logo' width={160} />
                <button onClick={() => {setModalOpen(!modalopen)}} className='nav-button'>
                    {!modalopen ? <RxHamburgerMenu size={28} color={'#333333'} /> : <IoClose size={28} color={'#333333'} />}
                </button>
            </div>
        </div>
    );
}

export default Navigation;