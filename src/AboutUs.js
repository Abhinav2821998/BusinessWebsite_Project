import React from "react";
import Use from "./API/Use";
/** Part6 **/
const AboutUs = () => {
    return (
        <>
            <section className="temp-section Our Services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center services-leftside-image">
                            <img src="./images/payment-bank.png" alt="aboutUsimage" />
                        </div>

                        <div className="col-12 col-lg-7 text-center services-list">
                            <h3 className="mini-title">
                                --Now Available at Google and IOS Play Store.
                            </h3>
                            <h1 className="main-heading">
                                Learn How To Use the App?
                            </h1>
                            <div className="row our-services-info">
                                <div className="services">
                                    <div className="col-1 our-services-number">1</div>
                                    <div className="col-10 our-services-data">
                                        <h2>Sign In</h2>
                                        <p className="main-hero-para">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                                        </p>
                                    </div>

                                    <div className="col-1 our-services-number">2</div>
                                    <div className="col-10 our-services-data">
                                        <h2>Open Your Account</h2>
                                        <p className="main-hero-para">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.
                                        </p>
                                    </div>

                                    <div className="col-1 our-services-number">3</div>
                                    <div className="col-10 our-services-data">
                                        <h2>Send Payment Request.</h2>
                                        <p className="main-hero-para">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>

                    </div>
                </div>
            </section>

            { /*Part 7 */}
            <section className="temp-section Our Services">
                <div className="container mb-5">
                    <div className="row">


                        <div className="col-12 col-lg-7 text-center services-list">
                            <h3 className="mini-title">
                                Support Any Language.
                            </h3>
                            <h1 className="main-heading">
                            --Full Support available 24/7.
                            </h1>

                            {/* Another way to render multiple elements.*/}
                            {
                                Use.map((currEle) => {
                                    const { id, title, info } = currEle;
                                    return (
                                        <>
                                            <div className="row our-services-info">
                                                <div className="services">
                                                    <div className="col-1 our-services-number">{id}</div>
                                                    <div className="col-10 our-services-data">
                                                        <h2>{title}</h2>
                                                        <p className="main-hero-para">
                                                            {info}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            
                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>

                        <div className="col-12 col-lg-5 services-leftside-image">
                            <img src="./images/call-center.jpeg" alt="aboutUsimage" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;