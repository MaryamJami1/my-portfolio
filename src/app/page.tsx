import React from 'react'
import Header from '../../components/header'
import Skills from '../../components/skills'


export default function page() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Header />
        <Skills/>
      </div>
    </main>
  )
}
