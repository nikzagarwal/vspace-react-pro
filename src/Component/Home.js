import React, { Component } from 'react';
import { Link } from "react-router-dom";
import image from '../assets/banner.png'
import image1 from '../assets/p1.png'
import image2 from '../assets/p2.png'
import image3 from '../assets/p3.png'
import image4 from '../assets/p4.png'
import image5 from '../assets/p5.png'
import service1 from '../assets/1.png'
import service2 from '../assets/2.png'
import service3 from '../assets/3.png'
import service4 from '../assets/4.png'
import service5 from '../assets/5.png'
import service6 from '../assets/6.png'


class Home extends Component {
    render() {
        return (
            <div >

                <section className="main-banner">
                    <img className="img-fluid img-responsive" src={image} alt="Vspaces - Unified Omni-Commerce Platform" />
                </section>

                <div className="Arrow">
                    <Link to="#Arroww">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link >
                </div>


                <div className="paragraph text-center mb-5" id="Arroww">
                    <div className="gradient-bg pt-5">

                        <h4 className="grad2">Vspaces offers online and omnichannel ecommerce technology solutions for
                             <br /> customers to launch and manage their own online stores, enterprises and
                             <br /> marketplaces.
                             </h4>
                        <button className="button button2"><Link className="hrf" to="/gito-ai">PRODUCTS</Link ></button>
                        <button className="button"><Link className="hrf" to="/consulting">SERVICES</Link ></button>
                    </div>
                </div>



                <div className="header text-center mt-3">
                    <h1>PRODUCTS</h1>
                </div>
                <div className="container-fluid">
                    <div className="content">
                        <div className="row grid justify-content-center">
                            <div className="col-md-4">
                                <figure className="effect-oscar">
                                    <Link to="/gito-ai">
                                        <img src={image1} alt="gito.ai" />
                                        <figcaption>
                                            <h2>GITO <span>.ai</span></h2>
                                            <p>AI (Artificial Intelligence) Driven Omni-Commerce Platform for Retailers.</p>
                                        </figcaption>
                                    </Link >
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="effect-oscar">
                                    <Link to="/marketPlace">
                                        <img src={image2} alt="marketplace" />
                                        <figcaption>
                                            <h2>MARKET <span>.place</span></h2>
                                            <p>AI (Artificial Intelligence) Driven E-Marketplace Technology Platform for Retailers. </p>
                                        </figcaption>
                                    </Link >
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="effect-oscar">
                                    <Link to="/survey">
                                        <img src={image3} alt="survey" />
                                        <figcaption>
                                            <h2>SURVEY <span>.ai</span></h2>
                                            <p>AI(Artificial Intelligence) Driven Market Research Survey Engine.</p>
                                        </figcaption>
                                    </Link >
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="effect-oscar">
                                    <Link to="/digit">
                                        <img src={image4} alt="digital twin" />
                                        <figcaption>
                                            <h2>DIGIT <span>.ai</span></h2>
                                            <p>AI(Artificial Intelligence) Driven Customer Digital Twin.</p>
                                        </figcaption>
                                    </Link >
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="effect-oscar">
                                    <Link to="/kyv">
                                        <img src={image5} alt="blockchain kyv" />
                                        <figcaption>
                                            <h2>KYV <span>.block</span></h2>
                                            <p>Blockchain Smart Contracts Driven KYV (Know-Your-Vendor).</p>
                                        </figcaption>
                                    </Link >
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container-fluid mb-5">
                    <div className="header text-center">
                        <h1>SERVICES</h1>
                    </div>

                    <div className="row">
                        <div className="column">
                            <Link to="/headless">
                                <img src={service1} />
                            </Link >
                            <Link to="/mobilApplication">
                                <img src={service2} />
                            </Link >
                        </div>
                        <div className="column">
                            <Link to="/digitalComerce">
                                <img src={service3}/>
                            </Link >
                        </div>

                        <div className="column">
                            <Link to="/marketting">
                                <img src={service4}  />
                            </Link >
                            <Link to="/UX">
                                <img src={service5}  />
                            </Link >
                        </div>
                        <div className="column">
                            <Link to="/consulting">
                                <img src={service6} />
                            </Link >
                        </div>
                    </div>
                </div>

            </div>





        );
    }
}
export default Home;