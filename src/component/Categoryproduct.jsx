import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Products.css';
import { NavLink } from "react-router-dom";


const Categoryproduct = () => {

    const { c } = useParams();

    const [categori, setCat] = useState([]);

    useEffect(() => {
        if (c) {
            axios.get(`https://dummyjson.com/products/category/${c}`).then(
                (res) => {
                    // console.log("dffgdfgd",res.data.products)
                    setCat(() => { return [...res?.data?.products] });
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [c]);


    return (

        

       <div className="container">

        <div className="row mt-5">
            {categori.map((product) => (
                <div className="col-md-3 d-flex justify-content-center" key={product.id}>

                    <div className="card">
                        <img src={product.thumbnail} className="card-img-top imgs" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title.substring(0, 20)}</h5>
                            <small>{product.brand}</small>
                            <p className="card-text">{product.description.substring(0, 60)}...</p>
                            <div className="blat">
                                <span className="rat">⭐ {product.rating}/5</span><br />
                                <span className="price">Rs.{product.price}</span>
                            </div>
                            <div className="blat mt-2">
                                <img className="highlights" src={product.images[0]} alt="" />
                                <img className="highlights" src={product.images[1]} alt="" />
                                <img className="highlights" src={product.images[2]} alt="" />
                            </div>
                            <NavLink to={`/products/${product.id}`} className="btn btn-dark mt-3 w-100">Explore Product</NavLink>
                        </div>
                    </div>

                </div>
            )
            )}
        </div>
       </div>

    )
}

export default Categoryproduct;