"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../utils/motion'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5">
        My Experties
      </h1>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[14px] text-center mb-[16px]'>
        Making Web with modern technologies
      </motion.div>

    </div>
  )
}

export default SkillText