import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Image from '../components/Image/th (1).jpg'

const Navbar = () => {
  const items = useSelector((state)=> state.cart);
  return (
    <>
    
    <div className='flex p-4 bg-black text-white space-x-20'>
      <div className='h-auto'><img src={Image} alt="" /></div>
    <span className='text-3xl  pl-11 text-red-300'>ONLINE STORE</span>
    <div className="text-2xl space-x-10">

      <Link className='navlink hover:text-red-200 ' to="/">Home</Link>
      <Link className='navlink  hover:text-red-200' to="/Cart">Cart</Link>
      <Link className=' hover:text-red-200' to="">Mens</Link>
      <Link className=' hover:text-red-200' to="">Womens</Link>
      <Link className=' hover:text-red-200' to="">Kids </Link> 
      <span className='CartCount'>Cart Items: {items.length}</span>
    </div>
    </div>
       </>
  )
}

export default Navbar