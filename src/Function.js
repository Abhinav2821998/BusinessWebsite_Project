import React from "react";
import WorkApi from "./API/workApi";
import './index.css';
import { useState } from "react";

/*** Part4 ***/
const Function = () => {
    /*const ncard = (val) => {
        return (
            <Card
                logo={val.logo}
                title={val.title}
                info={val.info}
            />
        )
    }*/
    const [data, setdata] = useState(WorkApi);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How App works?</h1>
                    <div className="row">
                        {
                            data.map((currentEle) => {

                                const{id,logo,title,inform} = currentEle;

                                return (
                                    <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">

                                        {/*WorkApi.map(ncard)*/}
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">
                                            {inform}
                                        </p>

                                    </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
};
export default Function;