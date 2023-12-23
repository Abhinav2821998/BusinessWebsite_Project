import React from "react";
const Card = (props) => {
    return (
        <>
               
                <i className={props.logo}></i>
                <h2 className="sub-heading">{props.title}</h2>
                <p className="main-hero-para w-100">
                    {props.info}
                </p>
                
            
        </>
    );
};

export default Card;