import { useState } from "react";
import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    const [dis,setdis] = useState(false);

    return (
        <>
        <section className="navbar-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">EasyPay</a>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={()=> setdis(!dis)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${dis ? "show": ""}`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Service">Services</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-style" id="first" type="submit">Log In</button>
                            <button className="btn btn-style" id="second" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
            </section>
        </>
    )
    
}
export default Navbar;