import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import laravel from '../assets/laravel.png'
import vue from '../assets/vue.png'
import php from '../assets/php.png'
import python from '../assets/python.svg'
import django from '../assets/django.svg'
import mysql from '../assets/mysql.png'

const Skills = () => {
    return (
        <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack
            </h2>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={laravel} alt='' width={100} height={100}/>
                <p className='mt-2'>Laravel</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={php} alt='' width={100} height={100} />
                <p className='mt-2'>PHP</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={javascript} alt='' width={100} height={100}/>
                <p className='mt-2'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={vue} alt='' width={100} height={100} />
                <p className='mt-2'>Vue</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={react} alt='' width={100} height={100} />
                <p className='mt-2'>React</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={python} alt='' width={100} height={100} />
                <p className='mt-2'>Python</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={django} alt='' width={100} height={100} />
                <p className='mt-2'>Django</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] '>
                <img src={mysql} alt='' width={100} height={100}/>
                <p className='mt-2'>mySQL</p>
            </div>
        </div>
    )
}

export default Skills