import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { image } from '../assets/img/header-bg.jpg';
class Header extends Component {
    render() {
        return (
            <div >

                <section class="main-banner">
                    <img class="img-fluid img-responsive" src="banner.png" alt="CostpriZe - Unified Omni-Commerce Platform" />
                </section>

                <div class="Arrow">
                    <a href="#Arroww">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>


                <div class="paragraph text-center mb-5" id="Arroww">
                    <div class="gradient-bg pt-5">

                        <h4 class="grad2">Costprize offers online and omnichannel ecommerce technology solutions for
        <br /> customers to launch and manage their own online stores, enterprises and
        <br /> marketplaces.</h4>
                        <button class="button button2"><a class="hrf" href="gito-ai.html">PRODUCTS</a></button>
                        <button class="button"><a class="hrf" href="consulting.html">SERVICES</a></button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;