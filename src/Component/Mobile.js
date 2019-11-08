import React, { Component } from 'react';
import image1 from '../assets/mobile.png'

class Mobile extends Component {
    render() {
        return (
            <div >




                <section class="service-banner">
                    <img src={image1} class="img-fluid img-responsive" alt="banner-img" />
                </section>

                <div class="container text-center mb-5">


                    <p class="text-center  mb-5" />
                    <h1>
                        MOBILE APPLICATION DEVELOPMENT
        </h1>

                </div>

                <section class="m-bg1">
                    <div class="SERVICE container">
                        <h2 class="mt-5 "><b class=" ">Cross-Platform Development </b></h2>

                        <ul class="mt-3 px-4">
                            <li>React Native Framework</li>
                            <li>Ionic Framework</li>

                        </ul>
                        <h2 class="mt-4 mb-5  "><b class=" ">Native Development </b></h2>

                    </div>


                </section>





            </div >
        );
    }
}
export default Mobile;



