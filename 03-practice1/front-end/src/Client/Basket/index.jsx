import React from 'react'
import { useContext } from 'react';
import { BasketContext } from '../../context/BasketProvider';

const Basket = () => {
  const { basket } = useContext(BasketContext)
  return (
    <>
       {
            basket.length === 0 ? <h1>basket item is empty</h1> : 
            
            <table className='table table-dark table-striped'>
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Increase</th>
                <th scope="col">Quantity</th>
                <th scope="col">Decrease</th>
                
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {
              basket.map((b)=>{
                return(
                  <tbody key={b.id}>
                    <tr>
                      <td>
                        <img src={b.imageUrl} alt={b.title}  width={150}/>
                      </td>
                      <td>
                        {b.title}
                      </td>
                      <td>
                        {b.country}
                      </td>
                      <td>
                        <button  className='btn btn-outline-success'>+</button>
                      </td>
                      <td>
                        {b.quantity}
                      </td>
                      <td>
                        <button  className='btn btn-outline-info'>-</button>
                      </td>
                      
                      <td>
                        <button  className='btn btn-outline-danger'>X</button>
                      </td>
                    </tr>
                   
                  </tbody>
                   
                  
                )
              })
            }

            </table>
             
        }
    </>
  )
}

export default Basket