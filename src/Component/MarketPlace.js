import React, { Component } from 'react';
import image1 from '../assets/market.png'
import image2 from '../assets/m1.png'
import image3 from '../assets/m2.png'
import image4 from '../assets/m3.png'
import image5 from '../assets/m4.png'
import image6 from '../assets/m5.jpg'
import image7 from '../assets/m6.jpg'
import image8 from '../assets/m7.png'
import image9 from '../assets/m8.jpg'

class MarketPlace extends Component {
    render() {
        return (
            <div >



                <section class="main-banner">
                    <img class="img-fluid  " src={image1}
                        alt="CostpriZe - Unified Omni-Commerce Platform" />
                </section>


                <div class="container MarketPlace">

                    <section class="market-1 mt-5">
                        <div class="container">
                            <div class="row ">
                                <div class="container text-center">
                                    <h1>
                                        MARKET.place
                                                     </h1>
                                    <h4> AI (Artificial Intelligence) Driven E-Marketplace Technology Platform for Retailers </h4>
                                </div>

                                <h5 class="text-center mt-3">
                                    <b>"Power of the group" </b> is an immeasurable advantage that aggregating platforms
                                                like marketplaces offer to their sellers.<br /><br /></h5>

                                <p class="text-center">
                                    The key responsibilities for the success
                                  of the marketplace such as marketing / customer acquisition / expansive product catalogue /
                                  smooth user experience / auotomated payment settlements / logistics-as-a-service ..etc are
                                  all pre-built offerings within the marketplace thus unshackling the sellers to just focus
                                  on sales and deliveries.
                                            <br />
                                    The fast-gaining digital retail transformation trend is the creation
                                    and introduction of vertical marketplaces. A vertical marketplace could be domain
                                    specific or geography specific or both.

                                        MARKET.PLACE is our Marketplace technology platform which has Artificial Intelligece (AI)
                                        driving critical capabilities such as autonomous marketing and customer acquisition.
                                                MARKET.PLACE offers the following 3 marketplace retail operating models.</p>

                            </div>
                        </div>
                    </section>
                </div>


                <div class="container">
                    <h1 class="mt-5 text-center"><b>Regular / Open Retail Marketplace </b></h1>
                    <p class="para-same-class mt-4">This marketplace technology solution suits
                          businesses who intend to create a virtualized "endless aisle" for consumers. The products and/or
                                services available within the marketplace will be expansive in range. Seller identities will be
                                largely anonymized to ensure their broad reach of service. Buyers will purely focus on their purchase
                                needs versus having to factor
            in the availability of products (and presence of sellers) within their delivery vicinity.</p>
                </div>


                <div class="container ">
                    <div class="row">
                        <div class="col-md-3">

                        </div>
                        <h4 class=" mb-5 text-center mt-5"><b>Marketplace eCommerce -</b> Full-fledged eCommerce platform with role (owner,
                  seller) based controlled access to pertinent capabilities</h4>
                        <div class=" marketplace-1-img col-md-9 ">
                            <img src={image2} class="img-fluid"  />
                        </div>
                    </div>
                </div>


                <section class="marketplace-1 mt-5 ml-5">
                    <div class="container">
                        <div class="row ">

                            <div class="marketplace">


                                <ul class="mt-4 px-4" type="square">
                                    <li>Master Product Catalog - Available for seller inheritance</li>
                                    <li>Flexible and vast range of  payment methods</li>
                                    <li>Multiple currency and multiple locale support</li>
                                    <li> Shipping rate calculation engine</li>
                                    <li> Promotions engine</li>
                                    <li>Inventory management</li>
                                    <li>Order management</li>
                                    <li>Shipment management</li>
                                    <li>User management</li>
                                    <li>Social Media Integrations</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>



                <div class="container marketplace-footer2 ">
                    <div class="row">

                        <h4 class="mt-5" ><b>Artificial Intelligence(AI) powered Retail Intelligence  - </b> </h4>
                        <p class="mt-3"> 360 degree analyzed data across all facets of marketplace commerce. This AI driven retail intelligence module has unmatched
                        analytical and recommendation capabilities bringing forth immeasurable value to sellers and marketplace
                        owner alike.
            </p>
                        <div class="col-md-9">
                            <div class=" marketplace-2-img ">
                                <img class="img-fluid mt-3" src={image3} />
                            </div>
                        </div>
                    </div>



                    <div class="marketplace-2 mt-5  ">
                        <div class="container">
                            <div class="marketplace-para ">
                                <ul class="mt-4 px-4 ml-4" type="square">
                                    <li>Sales Intelligence and Recommendations</li>
                                    <li>Sales Forecasting - Machine Language (ML) driven forecasting of sales </li>
                                    <li>Customer Behavioral Analytics and Recommendations</li>
                                    <li> Social Commerce Analytics </li>
                                    <li>Shipping Intelligence and Recommendations</li>
                                    <li>Product Recommendations</li>
                                    <li>Proactive SLA monitoring of orders and shipments and autonomous escalation execution</li>
                                </ul>
                            </div>
                        </div>



                    </div>




                </div>


                <div class="container marketplace-footer2 pt-5">
                    <div class="row  mt-2">
                        <div class="col-md-6">
                            <h4 class="mt-3 pt-5"> <b>KYV (Know Your Vendor) - </b></h4>
                            <ul class="mt-3 px-4 " type="square">
                                <li>Immutable/Secure authentication of sellers</li>
                                <li>Fully automated validation workflow </li>
                                <li>Ensures that only eligible sellers gain entry into the marketplace</li>
                            </ul>
                        </div>
                        <div class="col-md-6 mt-5">
                            <img class="img-fluid" src={image4} />
                        </div>
                    </div>
                </div>


                <div class="container pt-5  ">
                    <div class="row">

                        <h4 class="mt-5 "> <b>Seller Central - Control center where sellers</b></h4>

                        <div class="col-md-9">
                            <div class=" marketplace-2-img ">
                                <img class="img-fluid mt-3" src={image5} />
                            </div>

                        </div>
                    </div>


                    <section class="marketplace-2 mt-5  ">
                        <div class="container">
                            <div class="marketplace-para ">
                                <ul class="mt-3 px-4 ml-4 " type="square">
                                    <li>Manage inventory </li>
                                    <li>Manage promotional offers and discount </li>
                                    <li>Configure taxes and surcharges</li>
                                    <li>Manage orders</li>
                                    <li>Manage shipments</li>
                                    <li>Fully automated payment settlements</li>
                                    <li>Fully automated cancellation and refund enforcement</li>
                                    <li>Dispute remediation capabilities</li>

                                </ul>
                            </div>
                        </div>

                    </section>

                </div>

                <div class="container marketplace-footer2  ">
                    <div class="row "></div>

                    <h4 class="mt-5 pt-4"><b>Sustained Customer Engagement  </b></h4>
                    <ul class="mt-3 px-4 " type="square">
                        <li>Artificial Intelligence(AI) driven autonomous target and re-target marketing automation</li>
                        <li>Automated customer sentiment analysis via surveys </li>
                    </ul>
                </div>

                <hr class="marketplace-footer" />

                <div class="container text-center pt-5 mb-5">
                    <h1>Hyper-local Retail Marketplace</h1>

                    <p class="para-same-class mt-4 text-center"> Hyper-local Retail marketplace technology solution suits businesses who
                              intend to bring the "proximity" convenience to consumers. <br />
                        The products and/or services available within
                         the marketplace will typically be of "quick need" nature. Seller identities will be strongly promoted
                         to establish the hyper-local recognition and trust between consumers and sellers. Buyers are assured
                               of short-cycle delivery SLAs and optimum quality of delivered products.</p>

                </div>





                <div class="container">
                    <div class="row">

                        <h4> <b class="  ">Hyper-local Marketplace eCommerce - </b>Full-fledged Hyper-local eCommerce platform where
                  each capability is made "proximity" sensitive </h4>
                        <div class=" marketplace-1-img col-md-9 mt-5">
                            <img src={image6} class="img-fluid" />
                        </div>
                    </div>
                </div>


                <section class="marketplace-1 mt-5 ml-5">
                    <div class="container">
                        <div class="row">

                            <div class="marketplace cst-567">


                                <ul class="mt-4 px-4" type="square">
                                    <li>Automated shortlisting of sellers based on the shipping location of the consumer </li>
                                    <li> Sellers control the "serving distance"  that defines their order acceptance preference </li>
                                    <li>Master Product Catalog - Available for seller inheritance</li>
                                    <li>Flexible and vast range of  payment methods</li>
                                    <li> Multiple currency and multiple locale support </li>
                                    <li>Shipping rate calculation engine</li>
                                    <li>Promotions engine</li>
                                    <li> Inventory management </li>
                                    <li> Order management </li>
                                    <li>Shipment management</li>
                                    <li>User management</li>
                                    <li>Social Media Integrations</li>
                                </ul>
                            </div>

                        </div>


                    </div>
                </section>



                <div class="container marketplace-footer2 pt-5   ">
                    <div class="row pt-3">

                        <h4 class="mt-5 pt-3" ><b>Artificial Intelligence(AI) powered Retail Intelligence  - </b> </h4>
                        <p class="mt-3"> 360 degree analyzed data across all facets of marketplace commerce. This AI driven retail intelligence module has unmatched
                        analytical and recommendation capabilities bringing forth immeasurable value to sellers and marketplace
                        owner alike.
                        </p>
                        <div class="col-md-9">
                            <div class=" marketplace-2-img ">
                                <img class="img-fluid mt-3" src={image7} />
                            </div>

                        </div>
                    </div>


                    <section class="marketplace-2 mt-5  ">
                        <div class="container">
                            <div class="marketplace-para ">
                                <ul class="mt-4 px-4 ml-4" type="square">
                                    <li>Sales Intelligence and Recommendations</li>
                                    <li>Sales Forecasting - Machine Language (ML) driven forecasting of sales </li>
                                    <li>Customer Behavioral Analytics and Recommendations</li>
                                    <li> Social Commerce Analytics </li>
                                    <li>Shipping Intelligence and Recommendations</li>
                                    <li>Product Recommendations</li>
                                    <li>Proactive SLA monitoring of orders and shipments and autonomous escalation execution</li>
                                </ul>
                            </div>
                        </div>




                    </section>
                </div>



                <div class="container marketplace-footer2 pt-5">
                    <div class="row  mt-2">
                        <div class="col-md-6">
                            <h4 class="mt-3 pt-5"> <b>KYV (Know Your Vendor) - </b></h4>
                            <ul class="mt-3 px-4 " type="square">
                                <li>Immutable/Secure authentication of sellers</li>
                                <li>Fully automated validation workflow </li>
                                <li>Ensures that only eligible sellers gain entry into the marketplace</li>
                            </ul>
                        </div>
                        <div class="col-md-6 mt-5">
                            <img class="img-fluid" src={image8} />
                        </div>
                    </div>
                </div>



                <div class="container">
                    <div class="row">

                        <h4 class="mt-5"> <b>Seller Central - Control center where sellers</b></h4>
                        <div class=" marketplace-1-img col-md-9 mt-5">
                            <img src={image9} class="img-fluid" />
                        </div>
                    </div>
                </div>


                <section class="marketplace-1 mt-5 ml-5">
                    <div class="container">
                        <div class="row ">

                            <div class="marketplace">
                                <ul class="mt-3 px-4 ml-4 " type="square">
                                    <li>Manage inventory </li>
                                    <li>Manage promotional offers and discount </li>
                                    <li>Configure taxes and surcharges</li>
                                    <li>Manage orders</li>
                                    <li>Manage shipments</li>
                                    <li> Fully automated payment settlements</li>
                                    <li>Fully automated cancellation and refund enforcement</li>
                                    <li>Dispute remediation capabilities</li>
                                </ul>
                            </div>

                        </div>


                    </div>
                </section>



                <div class="container  marketplace-footer2 ">
                    <h4 class=" "> <b>Sustained Customer Engagement -</b></h4>
                    <ul class="mt-4 px-4 " type="square">
                        <li>Artificial Intelligence(AI) driven autonomous target and re-target marketing automation</li>
                        <li>Automated customer sentiment analysis via surveys </li>
                    </ul>
                </div>




                <hr class="marketplace-footer" />

                <div class="container   text-center pt-5 mb-5">
                    <h1>"E-Mall"(Calibrated) Retail Marketplace</h1>
                    <h4> E-mall marketplace technology provides a virtual store for each participating seller within the marketplace.
                         This marketplace model closely reflects the physical mall purchase experience of consumers. Seller identity will
                         be strongly established since
           the seller owns his/her own store. Buyers make guided decisions to purchase from seller stores of their choice.  </h4>
                </div>
                <div class="container  m-bg2">

                    <ul class="mt-4 px-4 " type="square">
                        <li>Each seller will have a distinct virtual store within the marketplace</li>
                        <li>Each seller can setup the virtual store to closely reflect their business preference</li>
                    </ul>


                    <h4 class="mt-5"><b>Master Product Catalog -</b>Available for seller inheritance</h4>
                    <ul class="mt-4 px-4 " type="square">
                        <li>Flexible and vast range of  payment methods</li>
                        <li>Multiple currency and multiple locale support</li>
                        <li> Shipping rate calculation engin</li>
                        <li>Promotions engine</li>
                        <li>Inventory management</li>
                        <li>Order management</li>
                        <li>Shipment management</li>
                        <li>User management</li>
                        <li>Social Media Integrations</li>
                    </ul>
                    <div class="container">
                        <h4 class="mt-5"> <b>"E-Mall" Marketplace eCommerce - </b> Full-fledged
                                    "E-Mall" eCommerce platform with role (owner, seller) based controlled access to pertinent capabilities</h4>
                        <ul class="mt-4 px-4 " type="square">
                            <li>Each seller will have a distinct virtual store within the marketplace</li>
                            <li>Each seller can setup the   virtual store to closely reflect their business preference</li>
                            <li>Master Product Catalog - Available for seller inheritance</li>
                            <li>Flexible and vast range of  payment methods</li>
                            <li>Multiple currency and multiple locale support</li>
                            <li>Shipping rate calculation engine</li>
                            <li>Promotions engine</li>
                            <li>Inventory management</li>
                            <li>Order management</li>
                            <li>Shipment management</li>
                            <li>User management</li>
                            <li>
                                Social Media Integrations
                                   </li>
                        </ul>
                    </div>

                    <div class="container">
                        <h4 class="mt-5"> <b>Artificial Intelligence(AI) powered Retail Intelligence- </b> 360 degree analyzed data across
                               all facets of marketplace commerce. This AI driven retail intelligence module has unmatched analytical
                                           and recommendation capabilities bringing forth immeasurable value to sellers and marketplace owner alike.</h4>
                        <ul class="mt-4 px-4 " type="square">
                            <li>Sales Intelligence and Recommendations</li>
                            <li>Sales Forecasting - Machine Language (ML) driven forecasting of sales </li>
                            <li>Customer Behavioral Analytics and Recommendations</li>
                            <li>Social Commerce Analytics </li>
                            <li>Shipping Intelligence and Recommendations</li>
                            <li>Product Recommendations</li>
                            <li>Proactive SLA monitoring of orders and shipments and autonomous escalation execution</li>

                        </ul>
                    </div>

                    <div class="container">
                        <h4 class="mt-5"><b>KYV (Know Your Vendor)-</b></h4>
                        <ul class="mt-4 px-4 " type="square">
                            <li>Immutable/Secure authentication of sellers</li>
                            <li>Fully automated validation workflow</li>
                            <li>Ensures that only eligible sellers gain entry into the marketplace</li>

                        </ul>
                    </div>

                    <div class="container">
                        <h4 class=" "> <b>Seller Central - Control center where sellers</b> </h4>
                        <ul class="mt-3 px-4 ml-4 " type="square">
                            <li>Manage inventory </li>
                            <li>Manage promotional offers and discount </li>
                            <li>Configure taxes and surcharges</li>
                            <li>Manage orders</li>
                            <li>Manage shipments</li>
                            <li> Fully automated payment settlements</li>
                            <li>Fully automated cancellation and refund enforcement</li>
                            <li>Dispute remediation capabilities</li>
                        </ul>
                    </div>

                    <div class="container">

                        <h4 class="mt-5"> <b>Sustained Customer Engagement -</b> </h4>
                        <ul class="mt-4 px-4 " type="square">
                            <li>Artificial Intelligence(AI) driven autonomous target and re-target marketing automation</li>
                            <li>Automated customer sentiment analysis via surveys </li>

                        </ul>
                    </div>


                </div>



</div>


                );
            }
        }
        export default MarketPlace;
        
        
        
        
        
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
