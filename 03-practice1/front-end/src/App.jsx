import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Client/Home/index'
import MainClient from './layouts/MainClient/index'
import Product from './Client/Products/index'
import ProductDetail from './Client/ProductDetail/index'
import Basket from './Client/Basket/index'
import Wishlist from './Client/Wishlist/index'
import NotFound from './Client/NotFound'
import Add from './Client/Add'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainClient />}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/addproducts' element={<Add/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/favourites' element={<Wishlist/>}/>
          
          
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
