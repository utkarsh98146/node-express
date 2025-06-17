import React from 'react'
import {Link} from "react-router-dom"
const  Navbar=()=> {

  const links =[
    {
      name:"Home",
      to:"/"
    },
    {
      name:"Blogs",
      to:"/blog"
    },
    {
      name:"Profile",
      to:"/profile"
    },
    {
      name:"Login",
      to:"/login"
    },
    {
      name:"SignUp",
      to:"/signup"
    }
  ]
  return (
    <nav className='flex items-center justify-between py-4'>
      <div className='w-1/6 brandName'>
        <Link to='/' className='text-xl font-bold'>Blog</Link>
      </div>
      <div className='w-1/6 '>
        
      </div>
      <div className='w-4/6 flex items-center justify-end'>
        {links.map((items,i)=>(
          <Link className='ms-4 hover:text-blue-400 transition-all duration-200' key={i} to={items.to}>{items.name}</Link>
        ))}
        <Link className='ms-4 bg-black rounded px-4 py-1 text-zinc-100 hover:bg-blue-400 transition-all duration-200'>SignUp</Link>
      </div>
    </nav>
  )
}

export default Navbar
