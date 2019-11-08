import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg  navbar-dark ">
                        <Link className="logo navbar-brand" to="/"> Vspaces</Link >
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown  " aria-controls="navbarNavDropdown " aria-expanded="false" aria-label="Toggle navigation ">
                            <span className=" navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse  navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item ml-3 ">
                                    <Link className="nav-link" to="/About">ABOUT US<span className="sr-only">(current)</span></Link >
                                </li>
                                <li className="nav-item dropdown ml-3">
                                    <Link className="nav-link dropdown-toggle" to="/" target="_blank" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PRODUCTS
                                     </Link >
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        </div>

                                        <Link className="TR dropdown-item menu-fc" target="blank" to="/gito-ai">GITO.ai</Link >
                                        <Link className="TR dropdown-item menu-fc" to="/marketPlace">MARKET.place</Link >
                                        <Link className="dropdown-item menu-fc" to="/survey">SURVEY.ai</Link >
                                        <Link className="dropdown-item menu-fc" to="/digit"> DIGIT.ai</Link >
                                        <Link className="dropdown-item menu-fc" to="/kyv"> KYV.block</Link >
                                    </div>
                                </li>
                                <li className="nav-item dropdown ml-3">
                                    <Link className="nav-link dropdown-toggle font-color" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SERVICES
                                      </Link >
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        </div>

                                        <Link className="dropdown-item menu-fc" to="/consulting">Consulting</Link >
                                        <Link className="dropdown-item menu-fc" to="/UX"> User Personal Driven UX and Design</Link >
                                        <Link className="dropdown-item menu-fc" to="/digitalComerce"> Digital Commerce Implementation</Link >
                                        <Link className="dropdown-item menu-fc" to="/headless">Headless Software Development</Link >
                                        <Link className="dropdown-item menu-fc" to="/mobilApplication">Mobile Application Development</Link >
                                        <Link className="dropdown-item menu-fc" to="/marketting">Marketing</Link >

                                    </div>
                                </li>
                                <li className="nav-item ml-3">
                                    <Link className="nav-link" to="/work">WORK</Link >
                                </li>
                                <li className="nav-item ml-3">
                                    <Link className="nav-link" to="/contact">CONTACT US</Link >
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {this.props.children}


                <div className="container mt-5 pt-5"></div>


                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Explore</h3>
                                    </div>
                                    <ul className="twitter-widget footer-links">
                                        <li><Link to="/Home"> Home </Link ></li>
                                        <li><Link to="/About"> About Us </Link ></li>
                                        <li><Link to="/Contact"> Contact</Link ></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Contact Details</h3>
                                    </div>

                                    <ul className="footer-links">
                                        <li><Link to="mailto:/">mrx.vworks@mail.com</Link ></li>
                                        <li><Link to="/Home">www.VSPACES.com</Link ></li>
                                        <li>Vidyaashish Spaces Pvt. Ltd.<br />#126, 2nd floor, 1st main <br />Gokulam 3rd stage Mysore 570002</li>
                                        <li>Contact No: 84316020XX, 96637133XX</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Social</h3>
                                    </div>
                                    <ul className="footer-links">
                                        <li><Link to="https://www.twitter.com"><i className="fa fa-facebook"></i> Facebook</Link ></li>
                                        <li><Link to="https://www.facebook.com"><i className="fa fa-twitter"></i> Twitter</Link ></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-company-name">All Rights Reserved. &copy; 2019 <Link to="/"> Vspaces </Link ></p>
                        </div>

                        <div className="footer-right">
                            <form method="get" action="#">
                                <input placeholder="Subscribe our newsletter.." name="search" />
                                <i className="fa fa-envelope-o"></i>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            
        );
    }
}
export default PageWrapper;