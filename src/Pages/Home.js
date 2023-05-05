import React from 'react'
import Products from '../components/Products.jsx'
const Home = () => {
  return (
    <>  
        <section>
            <h3 className='text-xl p-2 bg-black text-white'>Products</h3>
            <Products />
        </section>
    </>
  )
}

export default Home