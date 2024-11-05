"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Maryam Jamil
          </span>
        </a>

        
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="text-white text-2xl">☰</button>
        </div>

        
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#0300145e]`}>
          <div className="flex flex-col items-center py-2">
            <Link href={'/'} className="cursor-pointer">About Me</Link>
            <Link href={'/skills'} className="cursor-pointer">Skills</Link>
            <Link href={'/projects'} className="cursor-pointer">Projects</Link>
          </div>
        </div>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <Link href={'/'} className="cursor-pointer">About Me</Link>
          <Link href={'/skills'} className="cursor-pointer">Skills</Link>
            <Link href={'/projects'} className="cursor-pointer">Projects</Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a className="text-white text-2xl" href="https://www.linkedin.com/in/maryam-jamil---/"><FaLinkedin /></a>
          <a className="text-white text-2xl" href="https://github.com/MaryamJami1"><FaGithubSquare /></a>
          <a className="text-white text-3xl" href="mailto:maryamjamilofficial@gmail.com"><SiMinutemailer /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
