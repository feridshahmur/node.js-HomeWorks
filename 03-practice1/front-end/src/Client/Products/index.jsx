import React, { useEffect, useState } from 'react'

import axios from 'axios'
const Products = () => {
  const BASE_URL = "http://localhost:8080/practice1"
  const [products, setProducts] = useState([])

  const getAllData = async () => {
    try {
      const response = await axios(`${BASE_URL}`)
      // console.log(response.data);
      setProducts(response.data)


    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    getAllData()
  }, [])


  return (
    <section id='products' style={{margin:"30px 0"}}>
      <div className="container">
        <div className="cards">
          <div className="row">
          {
            products && products.map((p) => {
             return(
              <div key={p._id} className="col-12 col-md-6 col-lg-4">
               <div className="card" style={{ width: "18rem" }}>
                <img src={p.imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                  <button className='btn btn-outline-dark'>{p.country}</button>
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">
                   {p.description}
                  </p>
                  
                </div>
              </div>
             </div>
             )
            })
          }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Products
