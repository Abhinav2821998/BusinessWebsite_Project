import React from "react";
import Errors from "../Error";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../index.css';
const Error = () =>{
    return(
        <>
            <Navbar/>
            <Errors/>
            <Footer/>
        </>
    )
}

export default Error;