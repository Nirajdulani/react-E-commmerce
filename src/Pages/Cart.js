import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '../store/CartSlice'

const Cart = () => {
  const dispatch =  useDispatch()
const userList = useSelector(state =>state.cart)

const handleRemove = (userId) => {
dispatch(remove(userId)); 

}

  return (
    <div>

    
      <div className="cartWrapper">
      {
         userList.map((user)  => (
            <div className='cartCard text-xl'>
                <img src={user.thumbnail} alt="" />
                <h5>{user.category}:-{user.title}</h5>
                <h5>Price: ${user.price}</h5>
                <button className='btn' onClick={() => handleRemove(user.id)}>Remove</button> 

            </div>
          ))
      }

      </div>
    </div>
  )
}

export default Cart