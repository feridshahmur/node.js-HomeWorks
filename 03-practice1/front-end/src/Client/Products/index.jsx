import React, { useContext, useEffect, useState } from 'react';
import { BsCartFill } from "react-icons/bs";
import { BasketContext } from '../../context/BasketProvider';
import axios from 'axios';

const Products = () => {
  const BASE_URL = "http://localhost:8080/practice1";
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all"); // New state for country filter
  const { addToBasket } = useContext(BasketContext);

  const getAllData = async () => {
    try {
      const response = await axios(`${BASE_URL}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Filter products based on search query and selected country
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const matchesCountry = selectedCountry === "all" || product.country.toLowerCase() === selectedCountry.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  // Handle the change of the country filter
  const handleChange = (e) => {
    setSelectedCountry(e.target.value); // Update the selected country
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section id="products" style={{ margin: "30px 0" }}>
      <div className="container">
        <div>
          <input
            type="search"
            placeholder="Search..."
            style={{ padding: "1rem 5rem", margin: "1rem" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="almania">Almania</option>
            <option value="espanyol">Espanyol</option>
            <option value="suria">Suria</option>
          </select>
        </div>
        <div className="cards">
          <div className="row">
            {filteredProducts &&
              filteredProducts.map((p) => {
                return (
                  <div key={p._id} className="col-12 col-md-6 col-lg-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={p.imageUrl} className="card-img-top" alt="" />
                      <div className="card-body">
                        <button className="btn btn-outline-dark">{p.country}</button>
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                        <div className="btns">
                          <button onClick={() => { addToBasket(p) }} className="btn btn-outline-success">
                            <BsCartFill />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
