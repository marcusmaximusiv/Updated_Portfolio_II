import React from "react";
import wow from 'wow.js';
import '../../css/animate.css';
import '../../css/responsive.css';
import '../../css/magnific-popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div>
            <section className="main-section paddind" id="Portfolio">
                <div className="container">
                    <h2>Portfolio</h2>
                    <h6>This is some of my work I have created thus far</h6>
                    <br />
                    <div className="portfolioFilter">
                        <ul className="Portfolio-nav wow fadeIn" data-wow-delays="02s">
                            <li><a href="#" data-filter="*" className="current">All</a></li>
                            <li><a href="#" data-filter=".html">HTML</a></li>
                            <li><a href="#" data-filter=".css">CSS</a></li>
                            <li><a href="#" data-filter=".webdesign">Javascript</a></li>
                            <li><a href="#" data-filter=".jquery">Jquery</a></li>
                            <li><a href="#" data-filter=".firebase">Firebase</a></li>
                            <li><a href="#" data-filter=".nodejs">NodeJS</a></li>
                            <li><a href="#" data-filter=".javascript">Javascript</a></li>
                            <li><a href="#" data-filter=".projects">Projects</a></li>
                            <li><a href="#" data-filter=".sql">MySQL</a></li>
                            <li><a href="#" data-filter=".ajax">AJAX</a></li>
                        </ul>
                    </div>
                    <div className="portfolioContainer wow fadeInUp" data-wow-delays="04s">
                        <div className=" Portfolio-box html webdesign css">
                            <a href="https://marcusmaximusiv.github.io/Responsive-Portfolio"><img src="Portfolio-pic1.jpg" alt="" /></a>
                            <h3>Building a Wireframe/That Portfolio Though</h3>
                            <p>HTML, CSS, Web Design</p>
                        </div>
                        <div className="Portfolio-box webdesign html css">
                            <a href="https://marcusmaximusiv.github.io/Bootstrap-Portfolio"><img src="Portfolio-pic2.jpg" alt="" /></a>
                            <h3>Responsive Assignment</h3>
                            <p>Web Design, HTML, CSS</p>
                        </div>
                        <div className=" Portfolio-box html css javascript">
                            <a href="https://marcusmaximusiv.github.io/03_JavaScript_Assignment/"><img src="Portfolio-pic3.jpg" alt="" /></a>
                            <h3>Javascript Assignment</h3>
                            <p>HTML, CSS, Javascript</p>
                        </div>
                        <div className=" Portfolio-box html css jquery">
                            <a href="https://marcusmaximusiv.github.io/10-Liri-bot/"><img src="Portfolio-pic4.jpg" alt="" /></a>
                            <h3>JQuery Assignment</h3>
                            <p>HTML, CSS, Jquery</p>
                        </div>
                        <div className=" Portfolio-box html css javascript">
                            <a href="https://marcusmaximusiv.github.io/11-advanced-javascript/"><img src="Portfolio-pic5.jpg" alt="" /></a>
                            <h3>Javascript Assignment 2</h3>
                            <p>HTML, CSS, Javascript</p>
                        </div>
                        <div className=" Portfolio-box ajax css html">
                            <a href="https://marcusmaximusiv.github.io/06-GIPHY-API"><img src="Portfolio-pic6.jpg" alt="" /></a>
                            <h3>GifTastic</h3>
                            <p>HTML, CSS, Jquery, AJAX</p>
                        </div>
                        <div className=" Portfolio-box jquery css html">
                            <a href="https://marcusmaximusiv.github.io/07-Train-Scheduler/"><img src="Portfolio-pic6.jpg" alt="" /></a>
                            <h3>Train Scheduler</h3>
                            <p>HTML, CSS, Jquery</p>
                        </div>
                        <div className=" Portfolio-box jquery css html ajax projects">
                            <a href="https://marcusmaximusiv.github.io/Project_1/"><img src="Portfolio-pic6.jpg" alt="" /></a>
                            <h3>Project 1</h3>
                            <p>HTML, CSS, Jquery, AJAX</p>
                        </div>
                        <div className=" Portfolio-box jquery css html javascript">
                            <a href="https://marcusmaximusiv.github.io/Updated_Portfolio/"><img src="Portfolio-pic6.jpg" alt="" /></a>
                            <h3>Updated Portfolio</h3>
                            <p>HTML, CSS, Jquery, javascript</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;