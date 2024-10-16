import React from 'react'
import HeaderContent from './headerContent'

export default function Header() {
    return (
        <div className='realtive flex flex-col h-full w-full'>
            <video
                autoPlay
                muted
                loop
                className='rotate-180 absolute top-[-230px] left-0 z-[1] w-full h-full object-cover'
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <HeaderContent/>
        </div>
    )
}
