import React from "react";
const Errors = () =>{
    return(
        <>
            <div className="error">
                <h1>Error Loading Page..</h1>
                <p>The page you are looking for is temporarily unavailable.</p>
                <a href="/"><button>Back to Home Page</button></a>
            </div>
        </>
    )
}

export default Errors;