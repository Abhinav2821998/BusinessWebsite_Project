import React, { useState } from "react";
import serviceApi from "./API/serviceApi";
/**Part7 --> Services */

const Services = () => {
    const [data, setdata] = useState(serviceApi);

    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Learn To Send Money.
                    </h1>
                    <div className="row">
                        {data.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                                        key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;