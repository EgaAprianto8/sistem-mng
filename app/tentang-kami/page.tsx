import TentangKami from '@/components/pages/TentangKami/TentangKami'
import HeroTK from '@/components/pages/TentangKami/HeroTK'
import React from 'react'
import Navbar from '@/components/layouts/Navbar'
import Navbar2 from '@/components/layouts/Navbar2'
import Footer from '@/components/layouts/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <HeroTK/>
    <TentangKami/>
    <Footer/>
    </>
  )
}

export default page
