import React from 'react'
import './Home.scss'
import { FaArrowRight } from "react-icons/fa6";
import momo1 from './momo1.png'
import img from './abtimg.png'

const Home = () => {
  return (
    <>
      <div className='ellipse'></div>
      <div className='home-wrapper'>
        <div className="home-first">
          <div className='hi-first-left'>
            <div className="hi-first-content">
              <h2>RESTAURANT</h2>
              <h1>
                <span>The</span>
                <span className='white-text'>#One</span>
              </h1>
              <h1>
                <span>Momo</span>
                <span className='orange-text'>Restaurant</span>
              </h1>
              <p>
                <span>More than </span>
                <span className='orange-text'>20+ Varieties </span>
                <span>of momo available for you</span>
              </p>
            </div>
            <button>
              <span className='btn-text'>Explore Food Menu</span>
              <span className='btn-icon'><FaArrowRight /></span>
            </button>
          </div>
          <div className='hi-first-right'>
            <img src={momo1} alt="Home" />
          </div>
        </div>
        <div className="home-second">
          <div className='home-second-left'>
            <div className='home-second-img-bg'></div>
            <img src={img} alt="about img" />
          </div>
          <div className="home-second-right">
            <h1 className='home-second-heading'>
              <span>Why Customers </span>
              <span className='orange-text'>Love Us</span>
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nulla voluptate rerum animi iure aliquam, explicabo maiores aut laboriosam est recusandae laudantium odit quibusdam iusto quis nobis in sapiente pariatur, eligendi dolor sit nisi! Cumque ratione unde aut sapiente, nam totam cum maxime repellendus culpa impedit sed quasi facilis aspernatur.</p>
            <div className='btn'>
              <button>
                <span className='btn-text'>Explore Food Menu</span>
                <span className='btn-icon'><FaArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home