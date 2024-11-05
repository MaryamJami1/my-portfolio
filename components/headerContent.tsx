"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export default function HeaderContent() {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-[40] mb-11 w-full z-[20]' id="about-me">
            <div className='flex flex-col w-full h-full gap-5  justify-center m-auto text-start' >
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] mt-[7rem]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>Frontend Developer</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    <span>
                        providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> exceptional </span>
                        project solutions
                    </span>


                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-slate-400 my-5 max-w-[600px]'>I&apos; am a frontend developer focused on building modern, efficient websites. Browse through my projects and skills.

                </motion.p>
                <motion.a
                    href="/maryam-jamil-resume.lnk"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Download Resume
                </motion.a>


            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center mt-[60px]'>
                <Image
                    src="/mainIconsdark.svg"
                    alt="icons"
                    height={650}
                    width={650} />

            </motion.div>
        </motion.div>
    )
}
