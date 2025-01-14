import React, { createContext, useState } from 'react'

export const BasketContext = createContext(null)

const BasketProvider = ({children}) => {
  const [basket , setBasket] = useState([])


  const addToBasket = (product)=>{
      const found = basket.find((b)=>b._id === product._id)
      if (!found) {
        setBasket([...basket , {...product ,quantity : 1 }])
      }
      else{
        setBasket([...basket])
        found.quantity++
      }
  }
  return (
    <BasketContext.Provider value={{basket , addToBasket}}>

      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider