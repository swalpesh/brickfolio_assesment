import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Product.css';


const Product = () => {

    const { id } = useParams();

    const [produ, setProduct] = useState([]);


    useEffect(() => {
        if (id) {
            axios.get(`https://dummyjson.com/products/${id}`).then(
                (res) => {
                    console.log(res)
                    setProduct(() => { return [res.data] });
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id]);






    return (
        <div>
            <div className="container">
                <div className="row">
                    {produ.map((product) => (


                        <div className="col-md-6">
                            <div className="row mt-5">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                            <div className="row">
                                <div className="thumb">
                                    <img src={product.images[0]} className="imgs" alt={product.title} />
                                    <img src={product.images[1]} className="imgs" alt={product.title} />
                                    <img src={product.images[2]} className="imgs" alt={product.title} />
                                </div>
                            </div>
                        </div>

                    )
                    )}

                    {produ.map((product) => (


                        <div className="col-md-6">
                            <div className="row mt-5">
                                <h1 className="title">{product.title}</h1>
                                <small>{product.brand} | {product.category}</small>
                                <small className="mt-2">⭐ {product.rating} / 5 (Star Rating)</small>

                                <h3 className="mt-4">Price: Rs {product.price} <span className="dis"><font color="red">({product.discountPercentage} % discount)</font></span></h3>

                                <b className="mt-4">Product Description:</b>
                                <p className="mt-2 data">{product.description}</p>

                                <button className="btn btn-outline-dark mt-4">Add to Cart</button>
                                <button className="btn btn-dark mt-2">Buy Now</button>
                            </div>
                        </div>

                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product;