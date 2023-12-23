import React, { useState } from "react";
import "../src/index.css";
/**Part8 -- Contact Us -- */
const Contact = () => {
    const [data,setdata] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name,value;

    const submitData = (event) =>{
        name = event.target.name;
        value = event.target.value;
        setdata({...data, [name] : value});
    }



    // connect with firebase
  const submitValue = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = data;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://reacteasypay-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setdata({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading">
                                    Connect with our <br />
                                    Team.
                                </h1>
                                <p className="main-hero-para">
                                    ornare arcu dui vivamus arcu felis bibendum ut tristique et
                                </p>
                                <figure>
                                    <img
                                        src="./images/sales-forecast.jpg"
                                        alt="contactUsImg"
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>

                            {/* Right side of the Contact section */}
                            <div className="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input">
                                            <input
                                                name="firstName"
                                                type="text"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter first name"
                                                value={data.firstName}
                                                onChange={submitData}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input">
                                            <input
                                                name="lastName"
                                                type="text"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter last name"
                                                value={data.lastName}
                                                onChange={submitData}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input">
                                            <input
                                                name="email"
                                                type="email"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter email"
                                                value={data.email}
                                                onChange={submitData}
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input">
                                            <input
                                                name="phone"
                                                type="number"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter PhoneNumber"
                                                value={data.phone}
                                                onChange={submitData}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 contact-input">
                                            <input
                                                name="address"
                                                type="text"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter Address"
                                                value={data.address}
                                                onChange={submitData}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 contact-input">
                                            <input
                                                name="message"
                                                type="text"
                                                id="msg"
                                                className="form-control"
                                                placeholder="Enter Message"
                                                value={data.message}
                                                onChange={submitData}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label">
                                            I agree that TechieAbhinav may contact me at the above mentioned 
                                            phone number or email.
                                        </label>
                                    </div>

                                    <button type="submit" 
                                    className="btn btn-style w-100" onClick={submitValue}> Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;