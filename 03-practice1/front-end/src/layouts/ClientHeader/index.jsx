import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const ClientHeader = () => {
  return (
    <header className="navbar navbar-expand-lg" style={{ backgroundColor: '#686868' }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img 
          src="https://preview.colorlib.com/theme/immigration/img/logo.png" 
          alt="Logo" 
          className="img-fluid"
          style={{ height: '50px' }}
        />
        
        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink 
                to={"/"} 
                className="nav-link text-white"
                style={{ fontWeight: 'bold' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to={"/products"} 
                className="nav-link text-white"
                style={{ fontWeight: 'bold' }}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to={"/addproducts"} 
                className="nav-link text-white"
                style={{ fontWeight: 'bold' }}
              >
               Add   Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to={"/basket"} 
                className="nav-link text-white"
                style={{ fontWeight: 'bold' }}
              >
                Basket <sup style={{color : "orangered"}}>{0}</sup>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to={"/favourites"} 
                className="nav-link text-white"
                style={{ fontWeight: 'bold' }}
              >
                Favourites <sup style={{color : "orangered"}}>{0}</sup>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ClientHeader;
