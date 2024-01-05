import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


const Navbar = () => {

    const [cate, setCategories] = useState([]);

    const getcategories = () => {
        axios.get(`https://dummyjson.com/products/categories`).then(
            (res) => {
                // console.log(res.data, "sdd");
                setCategories(() => { return res.data });
            }
        ).catch((err) => console.log(err));
    }

    useEffect(() => {
        getcategories();
    }, []);




    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Assignment</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">All Products</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Categories
                                </NavLink>
                                <ul className="dropdown-menu">

                                    {
                                        cate.map((c, i) => (
                                            <li key={c + i}><NavLink className="dropdown-item" to={`/products/category/${c}`}>{c}</NavLink></li>

                                        ))
                                    }
                                </ul>


                            </li>



                        </ul>
                        <div className="buttons">
                            <a to="" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in"></i> Login / Register
                            </a>


                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;