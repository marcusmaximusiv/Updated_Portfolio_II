import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    return (
        <div>
            <section class="main-section contact" id="contact">

                <div class="row">
                    <div class="col-lg-6 col-sm-7 wow fadeInLeft">
                        <div class="contact-info-box phone clearfix">
                            <h3><i class="fa fa-phone"></i>Phone:</h3>
                            <span>561-350-1594</span>
                        </div>
                        <div class="contact-info-box email clearfix">
                            <h3><i class="fa fa-pencil"></i>email:</h3>
                            <span>mark.allen.sterrenberg@gmail.com</span>
                        </div>
                        <ul class="social-link">
                            <li class="LinkedIn"><a href="https://www.linkedin.com/in/mark-sterrenberg-77999b41/"><i class="fa fa-linkedin"></i></a></li>
                            <li class="facebook"><a href="https://www.facebook.com/msterrenberg"><i class="fa fa-facebook"></i></a></li>
                            <li class="github"><a href="https://github.com/marcusmaximusiv"><i class="fa fa-github"></i></a></li>
                            <li id="resume" class="resume"><a href="#resume"><i class="fa fa-download"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-sm-4 wow fadeInUp delay-05s">
                        <div class="form">

                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" class="contactForm">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control input-text" id="name"
                                        placeholder="Your Name" data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control input-text" name="email" id="email"
                                        placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control input-text" name="subject" id="subject"
                                        placeholder="Subject" data-rule="minlen:4"
                                        data-msg="Please enter at least 8 chars of subject" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control input-text text-area" name="message" rows="5"
                                        data-rule="required" data-msg="Please write something for us"
                                        placeholder="Message"></textarea>
                                    <div class="validation"></div>
                                </div>

                                <div class="text-center"><button type="submit" class="input-btn">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;