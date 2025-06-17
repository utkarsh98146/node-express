import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const MainLayout = () => {
  return (
    <div className="px-34">
      <Navbar/>
      <main className='my-4'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
