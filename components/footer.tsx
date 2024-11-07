import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[20px] mt-11">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div> 
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
                        <RxGithubLogo />
                     <a href="https://github.com/MaryamJami1" target="_blank"><span className="text-[15px] ml-[6px] ">Github</span></a>    
                    </p>
                    <p className="flex flex-row items-center mb-[20px] cursor-pointer z-20">
                        <RxDiscordLogo />
                        <a href="https://discord.com/channels/@me/1211711150836944916" target="_blank"><span className="text-[15px] ml-[6px]">Discord</span></a> 
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
                        <RxInstagramLogo />
                       <a href="https://www.instagram.com/maryam_jamil._/profilecard/?igsh=ZG5xc3cxbGEzdWt" target="_blank"><span className="text-[15px] ml-[6px]">Instagram</span></a>     
                    </p>
                  
                    <p className="flex flex-row items-center mb-[20px] cursor-pointer z-20">
                        <RxLinkedinLogo />
                        <a href="https://www.linkedin.com/in/maryam-jamil---/" target="_blank"><span className="text-[15px] ml-[6px]">Linkedin</span></a>     
                        </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                  
                    <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
                        <RxLinkedinLogo />
                       <a href="https://www.linkedin.com/in/maryam-jamil---/" target="_blank"><span className="text-[15px] ml-[6px]">Linkedin</span></a>     
                    </p>
                    <p className="flex flex-row items-center mb-[20px] cursor-pointer z-20">
                  
                        <a href="mailto:maryamjamilofficial@gmail.com" target="_blank"><span className="text-[15px] ml-[6px]">maryamjamilofficial@gmail.com</span></a>
                    </p>
                </div>
            </div>

            <div className="my-[20px] text-[15px] text-center">
                &copy; Maryam jamil Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer