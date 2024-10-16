"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '../utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

export default function HeaderContent() {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-[40] w-full z-[20]'>
            <div className='flex flex-col w-full h-full gap-5  justify-center m-auto text-start'>
                <motion.div 
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] mt-[7rem]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                    <h1 className='Welcome-text text-[13px]'>Frontend Developer</h1>
                </motion.div>

            </div>
        </motion.div>
    )
}
