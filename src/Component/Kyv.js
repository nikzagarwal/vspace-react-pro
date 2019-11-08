import React, { Component } from 'react';
import image1 from '../assets/kyv.png'
import image2 from '../assets/k1.png'

class Kyv extends Component {
    render() {
        return (
            <div >

                <section class="main-banner">
                    <img class="img-fluid img-responsive" src={image1}
                        alt="CostpriZe - Unified Omni-Commerce Platform" />
                </section>



                <div class="container text-center">


                    <p class="text-center  mb-5">
                        <h1>
                            <br/>
                            
                            KYV.block
                                  </h1>
                        <h4> Blockchain Smart Contracts Driven KYV (Know-Your-Vendor) </h4>
                        <p class="mt-5">A big need for marketplaces is establishing the validity of their sellers.
                                      The seller compatibility with the marketplace's terms and conditions is intrinsic to heightened consumer service.</p>
                    </p>
                </div>

                <section class="kyv-bg">
                    <div class="row">
                        <div class="container">
                            <p>
                                The current set of marketplaces have multitude of ailments when it comes to seller
                                governance. The predominant cause of these seller related issues can be attributed
                                to the fact that an early whetting of sellers was not conducted thoroughly by these
                                marketplaces. Hence, issues such as consumer orders not being met or execution SLAs
                                being disregarded ..et al repeatedly occur. The impact here is borne directly by the
                                marketplace - depletion of customer traction; dilution of marketplace brand equity;
                                direct revenue impact due to ponzi seller pilferage are 3 of the many impacted areas
                                     that such a marketplace struggles with.<br /><br />

                            </p>
                            <ul class=" px-4" type="square">
                                <li>
                                    KYV.block resoundingly plugs this marketplace process gap.
                                    </li>
                                <li>
                                    KYV.block is an agile, configurable rules-based validation engine which enforces the execution of seller authentication rules during the seller on-boarding process.
                                    </li>
                                <li>
                                    KYV.block will capture pertinent documents/proofs from the prospective sellers, as defined in the underling authentication rule.
                                    </li>
                                <li>
                                    KYV.block authenticates the seller by running a series of authentication rules against all of the uploaded seller information.
                                    </li>
                                <li>
                                    KYV.block rates the seller as "acidic" and "alkaline", based on the outcome of the executed seller authentication rules.
                                    </li>
                                <li>
                                    Marketplaces can make governed seller approval decisions when empowered by KYV.block, hence securing the consumer interests as well as their own revenue.
                                    </li>
                            </ul>


                        </div>
                    </div>

                </section>
                <img src={image2} class=" mb-5 img-fluid img-responsive" />





            </div>
        );
    }
}
export default Kyv;















