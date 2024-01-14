import React from 'react'
import './Footer.scss'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Footer = () => {

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

    const legals = [
        {
            name: 'Terms & Conditions',
            link: 'terms',
        },
        {
            name: 'Privacy Policy',
            link: 'policies',
        },
        {
            name: 'Support',
            link: 'support',
        },
    ]

    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className="footer-top-left">
                    <div className="logo">
                        <Link to=''>
                        <img src={logo} alt="logo" />
                        <h1>momo</h1>
                        </Link>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ipsa quaerat aspernatur, ab possimus perferendis, tempora repudiandae temporibus libero saepe quas, culpa quo voluptate enim.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-nav-links">
                        <h1>momos</h1>
                        {
                            links.map(({ name, link }) => (
                                <Link to={link}>{name}</Link>
                            ))
                        }
                    </div>
                    <div className="legals">
                        <h1>Legals</h1>
                        {
                            legals.map(({ name, link }) => (
                                <Link to={link}>{name}</Link>
                            ))
                        }
                    </div>
                    <div className="footer-socials">
                        <h1>Follow Us</h1>
                        <div className="social-links">
                            <FaFacebookF className='social-icon' />
                            <FaInstagram className='social-icon' />
                            <FaLinkedinIn className='social-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright ©️2024 Everest Momo Pvt Ltd. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer