import React from 'react'
import './Home.scss'
import { FaArrowRight } from "react-icons/fa6";
import momo1 from './momo1.png'
import img from './abtimg.png'
import ellipse1 from './ellipse1.jpg'
import ellipse2 from './ellipse2.jpg'

const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <div className='big-ellipse'></div>
        <div className="home-first">
          <div className='home-first-left'>
            <div className="home-first-content">
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
          <div className='home-first-right'>
            <div className='ellipses-top'>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
                <img src={ellipse1} alt="Ellipse 1" />
              </div>
            </div>
            <img src={momo1} alt="Home" className='banner-img' />
            <div className='ellipses-bottom'>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
              <div className='ellipses'>
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
                <img src={ellipse2} alt="Ellipse 1" />
              </div>
            </div>
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
            <button>
              <span className='btn-text'>Explore Food Menu</span>
              <span className='btn-icon'><FaArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home