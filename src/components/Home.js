import React from 'react'
import "../css/Home.scss";
import Gallery from './Gallery';
import Workplaces from './Workplaces';
import Events from './Events';
import About from './About';
import Testimonial from './Testimonial';
import Executive from './Executive';
import ContactUs from './ContactUs';


function Home() {
  return (
    <>
        <div className='home'>
        <Gallery />
        <Workplaces />
        <Events />
        <About />
        <Executive />
        <Testimonial />
        <ContactUs />
        </div>
    </>
  )
}

export default Home;