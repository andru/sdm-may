import React from "react"
import Reviews from "./Testimonials"
import starsImg from "../assets/images/stars.png";
const HappyClients = () => {
    return(
        <>
        <div className="testimonials-up pt-12 d-flex flex-column justify-content-center bg-light">
            <div className="container pt-md-5 pt-sm-4">
                <div className="d-flex flex-column justify-content-center">
                    <div className="row d-flex justify-content-center text-center mb-3">
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <h2 className="display-5 mb-md-1 mb-sm-1 w-100">Over 50,000 tax returns filed!</h2>
                            <p className="fs-5 text text-dark lh-base">Mazuma has earned 4.95 stars on reviews.co.uk and 4.5 /5 on Trustpilot - and we’ve won numerous business-related awards, too. </p>                            
                        </div>
                    </div> 
                    <div className="row d-flex justify-content-center text-center">
                        <div class="col-md-6 col-sm-9 d-flex flex-row justify-content-between align-items-center">
                        <img src={starsImg} alt="Stars" />
                        </div>  
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4">
                        <p className="font-size-5 mt-4 mb-5">Read what our customers are saying about Strategically</p>
                    </div>
                </div>
            </div>                 
        </div>
        <div className="container-fluid testimonials-container">
            <Reviews/>
        </div> 
        </>  
    )
}
  
export default HappyClients