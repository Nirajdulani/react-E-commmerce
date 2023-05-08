import React from 'react'
import {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {add} from '../store/CartSlice'
//import {fetchProducts} from '../store/ProductSlice'


const Products = () => {
    
const dispatch = useDispatch();


//const {data , status} = useSelector((state) => state.products);
   
  const [userList, setUserList] = useState([]);
      useEffect(() => {
      fetchUser();

   // dispatch(fetchProducts());
    }, []);


  const fetchUser = async () => {

      await fetch("https://dummyjson.com/products/")
      .then((response) => response.json())

      .then((data) => {
          setUserList(data.products);
        })

      .catch((err) => console.log(err));

    };

    const handleAdd = (user) => 
    {
      dispatch(add(user));
    }

  return (
    <>
    <div className='productsWrapper border-white text-white bg-black p-10 border '>
        {
            userList.map((user)=>(
                <div className='Card space-y-8' key={user.id}>

                    <img src={user.thumbnail} alt="" />
                    <h4>{user.category}:-{user.title}</h4>
                    <h4>Price:  ${user.price}</h4>
                    <h4>Rating:  {user.rating}* </h4>
                    <button onClick={()=> handleAdd(user)} className='btn '>Add to cart</button>
                </div>    
            ))
        }
    </div>
    </>
  )
}

export default Products