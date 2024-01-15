import React from 'react'
import './Menu.scss'
import qr from './QRCode.png'
import { FaMobileAlt } from "react-icons/fa";

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <div className="menu-first">
                <h2 className='main-header-text'>Our Menu</h2>
                <h1>
                    <span className='orange-text'>Our menu is more than just momos,</span><br />
                    <span>with a variety of dishes to cater to all tastes and preferences.</span>
                </h1>
                <div className='qr-sec'>
                    <div className="qr-text">
                        <h1>Scan the QR code</h1>
                        <p>You can also check the allergy advices using your phone as well</p>
                    </div>
                    <div className="qr-code">
                        <img src={qr} alt="QR Not loaded" />
                        <h2>
                            <span className='orange-text'>SCAN</span>
                            <span>ME!</span>
                            <span><FaMobileAlt /></span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu