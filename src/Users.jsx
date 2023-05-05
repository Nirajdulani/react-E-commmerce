import React, { useEffect, useState } from "react";
const Users = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    await fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.products);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
        <div className="bg-black text-white">
            <div>
                {userList.map((user,index) => (
                    <div> 
                        <ol className="flex space-x-11 border">
                            <li className="p-10 border"><img src={user.thumbnail} alt="" className="h-auto w-auto" /></li>

                            <div><li className="pt-12 text-xl">{user.title}</li>
        
                            <li className="pt-6 text-xl">{user.description}</li>

                            <li className="pt-6 text-xl">PRICE:-${user.price}</li>

                            <li className="pt-6 text-xl">RATING:-{user.rating}*</li>

                            <li className="pt-6 text-xl">CATEGORY:-{user.category}</li>

                            <li className="pt-6 text-xl">
                             <button className="bg-red-300 px-6 rounded-full hover:bg-red-200 ">ADD TO Cart</button></li>
                          
                             
                           </div>
                            
                        </ol>
                    </div>
                   
                ))}
            </div>

            
         </div> 
    </>
  );
};
export default Users;