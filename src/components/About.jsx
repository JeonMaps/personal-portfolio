import React from 'react'
import aboutImage from '../assets/about.jpg'

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
            <div className='md:grid md:grid-cols-2 sm:py-16'>

                <div className='mt-4 md:mt-0 text-left flex'>
                    <div className='my-auto mx-6'>
                        <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                        <p className='text-base lg:text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImage} width={300} height={300} />
            </div>

        </div>
    )
}

export default About