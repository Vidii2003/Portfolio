import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons/icon'

const Homeinfo = ({currentstage}) => {
    if(currentstage === 1)
    {
        return(
            <h1 className='sm:text-xl sm:leading-swang text-center neo-brutalism-blue py-4 px-8 text-white'>
                Hi, I am
                <span className='font-semibold mx-2 text-white'>Vidya G S</span>👋
                <br /> A Front End Developer 👩‍💻
            </h1>
        )
    }
    if(currentstage === 2)
    {
      return(
          <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
                About Myself and About my skills <br /> Learn More About Me?
            </p>
            <Link to="/about" className='neo-brutalism-white neo-btn'>
                About me
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
          </div>
      )
    }
    if(currentstage === 3)
    {
        return(
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Worked with many mini Projects<br /> and have done internships.
                </p>
                <Link to="/projects" className='neo-brutalism-white neo-btn'>
                    View Projects
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    }
    if(currentstage === 4)
    {
        return(
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Contact me here to know more about me. <br />Let's connect each other...
                </p>
                <Link to="/contact" className='neo-brutalism-white neo-btn'>
                    Let's talk...☎️
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    } 
    return null;   
}

export default Homeinfo