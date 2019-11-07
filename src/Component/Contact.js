import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact">
                    <h1>FIND US HERE</h1>
                </div>

                <div className="container-fluid mt-5 ">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com.qa/maps/d/u/0/edit?mid=1_JBtaXVskGN4UqnY_ElbFihlkYiQ8S-_&ll=13.030445516039395%2C77.56513439839478&z=20" width="100%" height="400"></iframe>

                        </div>
                    </div>

                </div>


                <div class="container mt-5 pt-3 text-center ">
                    <div class="row">
                        <h2 class="ml-3 ">Get In Touch</h2>
                    </div>

                </div>
                <div class="container">
                    <div class="alert " id="message-box">
                    </div>
                    <div id="contact-form-result" data-notify-type="success" data-notify-msg="<i class=icon-ok-sign></i> Message Sent Successfully!"></div>
                </div>
                <form class="nobottommargin" id="template-contactform" name="template-contactform" action="php/contact-form.php" method="post">

                    <div class="container mt-5">

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="template-contactform-name">Name</label>
                            <div class="col-sm-10">
                                <input type="text" id="template-contactform-name" name="template-contactform-name" class="form-control" placeholder="Enter your name" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="template-contactform-message">Name of your business</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="template-contactform-message" name="template-contactform-message" placeholder=" Enter the name of your business" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="template-contactform-subject">What is the nature of your business</label>
                            <div class="col-sm-10">
                                <input type="text" id="template-contactform-subject" name="template-contactform-subject" class="form-control" placeholder=" Enter the nature of your business" required />
                            </div>
                        </div>



                        <div class="form-group">
                            <label class="control-label col-sm-4" for="template-contactform-email">Email</label>
                            <div class="col-sm-10">
                                <input type="email" id="template-contactform-email" name="template-contactform-email" class="form-control" placeholder="Enter your email" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-12" for="template-contactform-phone">Mobile Number Where We Can Call You</label>
                            <div class="col-sm-12">
                                <option data-countryCode="IN" value="91"> (+91)</option>                    
                                    <input class=" " type="number" id="template-contactform-phone" name="template-contactform-phone"  placeholder="Enter your number" required />
                              
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for=" ">How would you prefer to be contacted?</label>
                            <div class="col-sm-offset-2 col-sm-10">
                                <div class="checkbox">
                                    <label><input type="checkbox" id="template-contactform-emailcheckbox" value="yes" name="template-contactform-emailcheckbox" /> Email</label>
                                    <label><input type="checkbox" id="template-contactform-mobilecheckbox" value="yes" name="template-contactform-mobilecheckbox" /> Mobile</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="button " id="template-contactform-submit" name="template-contactform-submit" class="button btn-lg mt-3" data-toggle="modal" data-target="#myModal">Submit</button>

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <div class="checkbox">
                                    <label><input type="checkbox" id="template-contactform-remember" value="yes" name="template-contactform-remember" />Remember me</label>
                                </div>
                            </div>
                        </div>
                    </div >
                </form >
            </div>

        );
    }
}
export default Contact;