import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { Provider } from 'react-redux'
import Store from './store/Stores'



const App = () => {
  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>

    <Navbar />

    <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
    
    </Routes>
    </BrowserRouter>
    </Provider>
       
    </>
  )
}

export default App