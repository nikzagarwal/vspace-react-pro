import React, { Component } from 'react';
import image1 from '../assets/survey.png'
import image2 from '../assets/s1.png'

class Survey extends Component {
    render() {
        return (
            <div >

                <section class="main-banner">
                    <img class="img-fluid " src={image1}
                        alt="CostpriZe - Unified Omni-Commerce Platform" />
                </section>

                <section class="survey-1 mt-5">
                    <div class="container-fluid  text-center mb-5">
                        <h1>
                            SURVEY.ai
                              </h1>
                        <h4 class="mt-4 mb-5 text-center ">AI(Artificial Intelligence) Driven Market Research Survey Engine</h4>
                    </div>
                    <div class="container-fluid">
                        <div class="row s-bg">

                            <div class="col-md-8">

                                <p class="para-same-class mt-3 ml-2">SURVEY.ai is our Artificial Intelligence(AI) tool that
                                          introspects survey responses to identify customer sentiment analysis.</p>
                                <ul class="mt-5 px-4" type="square">
                                    <li>SURVEY.ai has a built-in survey editor that retailers can use to create elegant and comprehensive surveys</li>
                                    <li>All forms of survey questions can be incorporated into the survey including NPS (net promoter score) questions</li>
                                    <li>SURVEY.ai leverages Machine Language(ML) to dissect the data into logical formations.</li>
                                    <li>Artificial Intelligence(AI) provides SURVEY.ai the heft needed to craft actionable insights for retailers which will immensely help the retailers to refine or correct nuances of their business to closely align to the customer sentiments.</li>
                                    <li>The survey intelligence BI dashboard provides a highly intuitive representation of customer sentiments as well as the proposed actionable insights.</li>
                                </ul>
                            </div>
                            <div class="col-md-4  mt-3">
                                <img src={image2} class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}
export default Survey;

