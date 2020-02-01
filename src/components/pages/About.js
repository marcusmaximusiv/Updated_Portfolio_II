import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function About() {
    return (
        <div id="about">
            <section class="main-section" id="aboutme">
                <div class="container" id="abooout">
                    <h2>About Me</h2>
                    <h6>Here is a little information about myself</h6>
                    <br />
                    <div class="row">
                        <div class="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                            <div class="service-list">
                                <div class="service-list-col1">
                                    <i class="fa fa-university"></i>
                                </div>
                                <div class="service-list-col2">
                                    <h3>Education</h3>
                                    <br />
                                    <p>Bachelors in Information Technology from Florida State University</p>
                                </div>
                            </div>
                            <div class="service-list">
                                <div class="service-list-col1">
                                    <i class="fa fa-globe"></i>
                                </div>
                                <div class="service-list-col2">
                                    <h3>Born In</h3>
                                    <br />
                                    <p>Boca Raton, FL</p>
                                </div>
                            </div>
                            <div class="service-list">
                                <div class="service-list-col1">
                                    <i class="fa fa-star"></i>
                                </div>
                                <div class="service-list-col2">
                                    <h3>Skills</h3>
                                    <br />
                                    <p><b>Front-end:</b> <br /> HTML, CSS, Bootstrap, JQuery, etc</p>
                                    <p><b>Back-end:</b><br />AWS, Azure, etc</p>
                                    <p><b>CI/CD:</b><br />Jenkins, SAST, DAST, etc</p>
                                    <br />
                                    <p>If you want more information on my skills<br /><br /><a class="link animated fadeInUp delay-1s servicelink" href="/Contact#resume">Click Here</a></p>
                                </div>
                            </div>
                        </div>
                        <figure class="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
                            <img src="profile.jpeg" alt="" />
                        </figure>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;