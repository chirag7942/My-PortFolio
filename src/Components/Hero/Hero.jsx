import React from 'react'
import './Hero.css'
import myimage from '../../assets/myimage.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={myimage} alt="" />
      <h1><span>I'm Chirag Singh,</span> learning frontend development skills. </h1>
      <p>I'm a fresher and looking for an internship to show my skills in real life projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}  href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
