import React, { Component } from 'react';
import image1 from '../assets/consulting.png'
import image2 from '../assets/10.png'
import image3 from '../assets/11.png'

class Consulting extends Component {
    render() {
        return (
            <div >
                

                <section class="service-banner">
            <img src={image1} class="img-fluid " alt="banner-img"/>
      </section>


            <div class="SERVICE"> 
                        <div class="container text-center mb-5">
                        
                              
                                    <p class="text-center  mb-5">
                                        <h1>
                                            <br/>
                                            <br/>
                                                IT STRATEGY CONSULTING 
                                        </h1>
                                          <p class="mt-5">Organizations, medium to large, are necessitated to 
                                                digitally transform their processes and systems. Rapid evolution of consumer 
                                                trends compel businesses to become highly agile and possess the innate capacity 
                                                to pivot in order to sustain and gain on customer traction. </p>
                                          <p> Few organizations have adopted the digital transformation journey in a governed manner.
                                                 A larger number of  organizations are moving towards digital transformation in a "break-fix"/reactive mode. 
                                                 The intrinsic need for both types of 
                                                organizations is the domain acumen and execution competency that our IT strategy consultants bring to the fore. </p>
                                    </p>
                        </div>
             <section class="service-01 m-bg1"> 

                 
                  <div class="container">
                        <h2 class="mt-5 mb-5"><b class="">Our Approach</b></h2>
                            <div class="row">
                              <div class="col-md-6">
                                    <p>We firmly believe that a "middle out" approach works best for our clients.</p>
                               <ul class="mt-4 px-4">
                                     <li> Our strategic consultants conduct deep-dive analysis of the disparate systems that a business possesses.</li>
                                     <li>Our consultants will conduct extensive interactions with the stakeholder ecosystem (consumers; business owners; 
                                           technology owners)  of each system to weigh in the  "alkaline" vs. 
                                           "acidic" standing of each system within the IT topology.</li>
                                     <li>We temper our profound understanding of a business's IT topology with our deep domain expertise 
                                           to re-craft a highly deconstructed IT roadmap.</li>
                                     <li>Collaborating closely with the stakeholders , our consultants 
                                           will evangelize the proposed IT architecture and closely govern the accurate implementation of the same.</li>
                                     <li>Our clients reap multiple benefits by partnering with us -</li>
                                     <ol class="mt-3 sub-lt">
                                           <li>Simplification of IT operating models</li>
                                           <li>Highly scalable technology architecture</li>
                                           <li>Invulnerable and impenetrable IT assets and data  and hence</li>
                                           <li>Proven growth in business</li>
                                     </ol>
                               </ul>

                              </div>
                              <div class="col-md-6">
                                    <img class="  img-fluid "src={image2} alt=""/>
                              </div>
                              </div>
                  </div>
            </section>

            <section class="service-02 m-bg2 mt-5"> 

                 
                  <div class="container">
                       
                            <div class="row">
                                    <div class="col-md-6 mt-5">
                                                <img class="  img-fluid "src={image3} alt=""/>
                                    </div>
                              <div class="col-md-6">
                                          <h2 class="mt-5 mb-5"><b class="">Our Offerings</b></h2>

                                    <p><b> CIO Advisory —</b>A range of advisory services to help CXO’s build a simple,
                                           secure and modern technology roadmap for the future.</p>
                                    <p><b> Digital Transformation Consulting —</b>Help clients in transforming their IT landscape into a scalable ,
                                           seamlessly interoperable and component architecture driven environment. </p>
                                    <p><b>System Re-engineering and Re-definition Consulting -</b>Helps clients in transforming their enterprise IT systems
                                          to be more modern, agile and effective in response to emerging business drivers like consumerization, 
                                          digitization or productization.  </p>
                                    <p><b>Cloud Consulting —</b>Offers a range of cloud services to help our clients develop effective, sustainable strategies
                                           to enable digital business and engineering transformations that support emerging customer success models.</p>
                                    <p><b>Security Consulting —</b> Offers a range of security services to help our clients understand and develop strategies 
                                          to manage security threats, adopt new security processes and technologies, 
                                          and provide ongoing security support and operations management.</p>
                              </div>
                             
                              </div>
                  </div>
            </section>

            </div>

            </div>
        );
    }
}
export default Consulting;








