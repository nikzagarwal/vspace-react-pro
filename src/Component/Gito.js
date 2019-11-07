import React, { Component } from 'react';
import image1 from '../assets/geo-fenced.jpg'
import image2 from '../assets/omni-commerce.jpg'
import image3 from '../assets/multi-currency.jpg'
import image4 from '../assets/gito.png'
class Gito extends Component {
    render() {
        return (
            <div >
                 <section class="main-banner">
            <img class="img-fluid img-responsive" src={image4}
             alt="CostpriZe - Unified Omni-Commerce Platform"/>
        </section>

                <section className="product-1 mt-5">
                    <div className="container ">
                        <div className="row text-center">
                            <div className="container text-center">
                                <h1>
                                    GITO.ai
                                 </h1>
                                <h4> AI (Artificial Intelligence) Driven Omni-Commerce Platform for Retailers </h4>
                            </div>
                            <p className="para-same-class mt-3">GITO.ai is a full-fledged eCommerce and Omni-commerce digital transformation platform empowered by foundational Artificial Intelligence(AI) capabilities which, together, provide optimum benefits to retailers.
                             <br /> <br />
                                Gito.ai supports nuanced retail operating models such as -
                             </p>
                        </div>
                    </div>
                </section>

                <div className="accordion mt-4 " id="accordionExample">
                    <div className="container mt-5 pt-3">
                        <div className="card">
                            <div className="card-header bg-color text-center" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h4 className=""><b className="">Geo-fenced Retail </b> <i className="down mb-2 ml-1"></i></h4>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <h4 className="mt-5 px-5">  For retailers who want to be Hyper-Local.</h4>
                                <div className="container  mt-2">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <ul className=" px-5 mt-4 ml-3 " type="square">
                                                <li>Proximity-based matching of local consumers/visitors to the retailer's store. This model provides a tremendous uptick to the service that the retailer offers to  consumers.</li>
                                                <li>Serving distance can be configured by the retailer.</li>
                                                <li>Multi-brand product cataloging and showcasing flexibility.</li>
                                                <li>Micro-delivery capability allows a retailer to create a delivery partner network to handle both early AM and regular-hour deliveries.</li>
                                                <li> Works best for - FMCG(Fast Moving Consumer Goods) ;  HORECA (Hotel/Restaurant/Cafe) ;</li>
                                                <li className="pb-5">Can fully support both B2C and B2B retailer needs</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 mt-4 mb-3">
                                            <img className="pro-img rounded" src={image1} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-color2 text-center btn" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h4 className=""><b>Omni-Commerce Retail </b><i className="down mb-2 ml-1"></i></h4>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h4 className="mt-4 px-4"><b>Omni-Commerce Retail -</b>For retailers who want to draw online traffic to their physical stores and vice versa, this model works best. All forms of Omni-Commerce are offered to retailers to empower themselves with.</h4>
                                    <div className="container  mt-2">
                                        <div className="row">
                                            <div className="col-md-6 text-center mt-3">
                                                <img className="pro-img rounded mb-5" src={image2} alt="" />
                                            </div>
                                            <div className="col-md-6 ">
                                                <ul className="px-5 mt-4" type="square">
                                                    <li> Click-to-Brick - Consumers purchase online and pick-up their orders at the store;  "try and buy" ..etc</li>
                                                    <li> Brick-to-Click - Consumers visit the store to place the order and pay online or at the time of delivery.</li>
                                                    <li>Click-Only.</li>
                                                    <li>Brick-Only.</li>
                                                    <li className="pb-5">Can fully support both B2C and B2B retailer needs</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-color text-center" id="headingFour">
                                    <h2 className="mb-0">
                                        <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapse">
                                            <h4 className=" "><b className="" >Multi-Currency Retail </b><i className="down mb-2 ml-1"></i></h4>

                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <h4 className="mt-4 px-4 "><b>Multi-Currency Retail -</b> For retailers who aim to sell globally and need the flexibility to accept multiple currencies during payments.</h4>
                                        <div className="container  mt-2">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <ul className="px-5 mt-4" type="square">
                                                        <li>Multi-currency product catalog  - Consumer's location drives the currency denomination and price of the cataloged products.</li>
                                                        <li>Support for up to 127 currencies.</li>
                                                        <li>Automated currency conversions during payment settlements.</li>
                                                        <li className="pb-5">Can fully support both B2C and B2B retailer needs</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-5 mt-2">
                                                    <img className="pro-img rounded" src={image3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div></div>

                                <div className="card">
                                    <div className="card-header  bg-color2 text-center" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn collapsed " type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapse">
                                                <h4 className=" "><b>Multi-Store and Multi-Locale Retail </b><i className="down mb-2 ml-1"></i></h4>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body">

                                            <h4 className="mt-4 px-4 "><b>Multi-Store and Multi-Locale Retail -</b>This model suits retail brands who have multiple stores across multiple locations and aim to bring them all online in the form of a "closed loop" marketplace where each "seller" is a participating store outlet of the retail brand. Each participating store can control. </h4>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-5 text-center mt-2">
                                                        <img className="pro-img rounded" src="./images/products/product images/Multi-Store.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-7 ">
                                                        <ul className="px-5 mt-4" type="square">
                                                            <li>The products sold within their virtual store.</li>
                                                            <li>The price points and inventory of the products sold within their virtual store.</li>
                                                            <li>Promotional offers within their virtual store.</li>
                                                            <li>Localized surcharges (taxes, shipping charges, packing charges ..etc),  if any   .</li>
                                                            <li className="pb-5"> Can fully support both B2C and B2B retailer needs </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Gito;





