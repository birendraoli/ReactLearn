import React from 'react'
import "./nav.scss"

const Nav = ({set}) => {
    const links = ['Home', 'Contact']
  return (
    <div className='nav-wrapper'>
        <div className='link'>
            {
                links.map((el) => (
                    <a href={el}>{el}</a>
                ))
            }
        </div>
        <div onClick={() => set((prev) => !prev)} className="btn">dark</div>
    </div>
  )
}

export default Nav