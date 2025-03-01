import React from 'react'
import heroImage from '../assets/jb.jpg'
//import heroImage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">

            <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
                <div className=''>
                    <img src={heroImage} alt="hero image" />

                </div>
            </div>

            <div className='col-span-2 px-5'>
                <h1 className='text-white text-2xl sm:text-5xl lg:text-8xl font-extrabold' style={{ height: '150px' }}>
                    <span className='primary-color'>
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={['Full Stack Web Developer', 1000, 'Native Developer', 1000, 'Database Administrator', 1000]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl mt-50' >
                    My name is Jeon Maps and I have 2+ years experience in web development and 1 year of mobile development using react native
                </p>

                <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br  from-blue-600 to-sky-400 text-white'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero