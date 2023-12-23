import React from "react";
import './index.css';

const Header = () =>{
    return(
        <>
            <header>
                <section className="container main-hero container">
                        <div className="row">
                            <div className="col-12 col-lg-6 header-left-side d-flex 
                            justify-content-center flex-column align-items-start">
                                <h1 className="display-2">Make Online Payment <br/>with this app now.</h1>
                                <p className="main-hero-para">
                                tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus
                                </p>
                                <h3>Get Instant Account access.</h3>
                                <div className="input-group mt-3">
                                <input
                                type="text"
                                className="rounded-pill w-75 me-3 p-2 form-control-text" 
                                placeholder="Enter your email"
                                />
                                <div className="input-group-button"> Get Access</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 header-right-side d-flex 
                            justify-content-center flex-column align-items-start main-herosection-images">
                            <img
                                src="./images/payment2.png"
                                alt="tempimg"
                                className="img-fluid"
                            />
                            <img
                                src="./images/payment1.jpg"
                                alt="tempimg"
                                className="img-fluid main-hero-img2"
                            />
                            </div>
                        </div>
                </section>
            </header>
        </>
    )
}

export default Header;