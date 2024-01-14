import React from 'react';
import './Navbar.scss';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Navbar = () => {
    const links = [
        {
            name: 'About Us',
            link: 'about',
        },
        {
            name: 'Our Menu',
            link: 'menu',
        },
        {
            name: 'Our Services',
            link: 'services',
        },
        {
            name: 'Allergy Advice',
            link: 'advice',
        }
    ]
    return (
        <div className='nav-wrapper'>
            <div className="logo">
                <Link to=''>
                <img src={logo} alt="logo" />
                <h1>momo</h1>
                </Link>
            </div>
            <div className="link">
                {
                    links.map(({ name, link }, index) => (
                        <Link key={index} to={link}>{name}</Link>
                    ))
                }
            </div>
            <div className="contact">
                <div className="social-links">
                    <FaFacebookF className='social-icon' />
                    <FaInstagram className='social-icon' />
                    <FaLinkedinIn className='social-icon' />
                </div>
                <div className="btn">
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar