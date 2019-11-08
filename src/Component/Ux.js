import React, { Component } from 'react';
import image1 from '../assets/ux.png'

class Survey extends Component {
    render() {
        return (
            <div >





                <section class="service-banner">
                    <img src={image1} class="img-fluid img-responsive" alt="banner-img" />
                </section>

                <div class="container text-center mb-5">


                    <p class="text-center  mb-5">
                        <h1>
                            <br/>
                            User Persona Driven UX and Design Strategy and Implementation
        </h1>
                    </p>
                </div>
                <div class="service-ux-01 m-bg1">
                    <div class="container  mt-5 ">
                        <p class="mt-5">User persona is a representation of an enterprise system / application /
    website’s ideal user base. </p>

                        <p> User persona, in essence, is a digital twin of a potential user (if the system/application
    is newly being built) and/or an existing user (if updates have to occur on in-use systems/applications).  </p>
                        <p>
                            User persona factors in the "intents" and "needs" of users as it pertains to the adoption or
                            continued usage of an application or website.
    </p>
                        <p>COSTPRIZE will work closely with clients to identify and gather user empirical data.
      The user profile data gathered will be archetypal and not stereotypical.   </p>
                        <p>COSTPRIZE will accurately craft user personas based on raw empirical data gathered
      about potential/existing users of our client systems or applications.</p>
                        <p>COSTPRIZE will accurately craft "lean" user personas when analyzed data already exists with our clients.
         "Lean" user personas fit extremely well with Agile methodology and consume much lesser time.</p>
                        <p>COSTPRIZE will use the user persona as a benchmark for UX design and will create the most optimal user experience for uur client's
      application or website in question.</p>
                    </div>
                </div>



            </div>
        );
    }
}
export default Survey;









