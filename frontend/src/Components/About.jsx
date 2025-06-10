import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'


const About = () => {
  return (
   <section className='about' id='about'>
    <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we are serious about is food.</p>
            </div>
            <p className='mid'>
            Welcome to GOLDEN EMBER, where flavor meets passion!

At GOLDEN EMBER, we believe that great food is the heart of every memorable experience. From the freshest ingredients to our chef’s culinary expertise, every dish is crafted with care to delight your senses. Whether you’re savoring our signature dishes or exploring seasonal specials, we aim to create a dining experience that feels like home—warm, inviting, and unforgettable.
                  </p>
                  <Link to={"/"}>
                  Explore Menu {" "} 
                  <span>
                 < HiOutlineArrowRight/>
                    </span>
                    </Link>
        </div>
        <div className="banner">
            <img src="about.png" alt="about" />
        </div>
    </div>
   </section>
  )
}

export default About;