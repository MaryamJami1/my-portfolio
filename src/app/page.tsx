import React from 'react'
import Header from '../../components/header'
import Skills from '../../components/skills'
import Encryption from '../../components/encryption'
import Projects from '../../components/project'
import Footer from '../../components/footer'


export default function page() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Header />
        <Skills/>
        <Encryption/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  )
}
