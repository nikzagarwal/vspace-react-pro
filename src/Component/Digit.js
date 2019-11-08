import React, { Component } from 'react';
import image1 from '../assets/digit.png'
import image2 from '../assets/d1.png'

class Digit extends Component {
    render() {
        return (
            <div >



<section class="main-banner">
<img class="img-fluid img-responsive" src={image1}
 alt="CostpriZe - Unified Omni-Commerce Platform"/>
</section>

<section class="digit-1 ">
<div class="container-fluid">
<div class="row">
  <div class="col-md-12 text-center pt-5 mb-5">
    <h1>DIGIT.ai</h1>
      <h4 class="mt-4">AI(Artificial Intelligence) Driven Customer 
        Digital Twin</h4>
      <p class=" para-same-class mt-3 ml-2 pt-5"> Retailers are embracing the shift from simple 
        transaction-focused interactions 
        to a
         <b class="underline">sustained customer</b> engagement, recognizing that consumers’
          buying journey neither begins
          when they set foot in a physical store ( or, visit a digital storefront via browser
           or mobile application), nor
           ends when the sale is completed.<br/><br/> 
                  Customer's journey begins with thoughts expressed (or followed or liked) on
                  
                  disparate media platforms 
                  and/or other form of behavioral indicators. These customer behavioral 
                  sentiments indicate his/her
                   <b class="underline">"needs"</b> that likely will mature towards solidified
                    <b class="underline">
                     "intent"</b> (to purchase) in the short/long time to come.  Close
                      understanding of <b class="underline">
                       customer's "needs" and "intents"</b> is intrinsic for retailers to 
                       bring in<b class="underline">
                     relevancy to their customer engagement</b>.<br/><br/> </p>
    </div> 
  </div>
</div>  
<div class="container-fluid">
    <div class="row digit-bg1">
                 
  <div class="col-md-4 mt-3">
      <img src={image2} class="img-responsive" />
  </div>
  <div class="col-md-8 mt-3">
                  The end of the customer's journey is no longer the point of purchase/Order_placement (online or offline).
                    The "point of purchase" begins a new cycle of "needs and intents" of/within a consumer. Retailers should 
                    maximize, to their advantage,  these multi-loop cycles, by repeating their customer (re-)engagement 
                    efforts. <br/><br/>
                  DIGIT.ai solves this deep need of retail by bringing forth<b class="underline"> insights-driven relevancy

                  </b> into<b class="underline"> sustained customer engagement</b> by retailers. <br/><br/>
                  DIGIT.ai is an Artificial Intelligence(AI) driven deep-analysis customer profiling platform with the
                   reliability of the profiling becoming more accurate over cycles of "insights" getting gathered about these
                    customers. <br/><br/> 
                  Retailers who have adopted DIGIT.ai have established clear dominance in customer captivity as well as in
                   revenue re-resurgence.<br/><br/>
                  DIGIT.ai creates highly effective "Customer Outreach Planograms" based on the following factors -.

            <ul class="mt-4 px-4"type="square">
                  <li>AI driven <b>"need" </b>recognition</li>
                  <li>AI driven <b>"intent"</b>recognition </li>
                  <li>Customer <b>"Stimulant"</b>analysis</li>
                  <li><b>Relevant</b> outreach to the customer</li>
                   
            </ul>
  </div>

</div>
</div>
</section>

            </div>
        );
    }
}
export default Digit;











