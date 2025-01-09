import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const ProductsTable = () => {
const BASE_URL = "http://localhost:8080/books"
    const[books , setBooks] = useState([])


    const getAllData = async()=>{
        try {
            const response = await axios( `${BASE_URL}`)
            setBooks(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
      
    getAllData()
      
    }, [])
    
  return (
    <table className='table table-dark table-striped'>
      <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Available</th>
            <th>Year</th>
            <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {
            books && books.map((b)=>{
                return(
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.genre}</td>
                        <td style={{color : b.available === true ? "blue" : "red"}}>{b.available.toString()} </td>
                        <td>{b.year}</td>
                        <td>{b.copies}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
  )
}

export default ProductsTable
