import React, { Fragment } from "react";
import Header from "./Header";
import {Carousel} from 'react-bootstrap';
import './Home.css'
import prideImg from './../../assets/1.jpg'
import ingredientsImg from './../../assets/2.png'
import testimoniol_1 from './../../assets/testimonial-1.jpg'
import testimoniol_2 from './../../assets/testimonial-2.jpg'
import Data from "../../Data";


const Home = () => {
    
    const mealsItem = Data.map((meal) => {

        return(
            
            <div className="col-md-4">

                <div className="box">

                    <img src= {meal.img} />
                    <h5> {meal.title} </h5>
                    <span> {meal.time} </span>
                    <h6> {meal.price} </h6>
                </div>

                <button> <a href="#">Order Now</a> </button>
            </div>
        )
    })

    return(

        <Fragment>

            <Header />
            <section className="numbers">

                <div className="container">

                    <div className="row">

                        <div className="col-md-3"> <h2>1234+</h2> <h6>Savings</h6> </div>
                        <div className="col-md-3"> <h2>5678+</h2> <h6>Photos</h6> </div>
                        <div className="col-md-3"> <h2>9101+</h2> <h6>Rockets</h6> </div>
                        <div className="col-md-3"> <h2>1213+</h2> <h6>Globes</h6> </div>
                    </div>
                </div>
            </section>

            <section className="pride">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                            <img src={prideImg} />
                        </div>

                        <div className="col-md-6">

                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button> <a href="#">Learn More</a> </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ingredients">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                           <h2>We make everything by hand with the best possible ingredients.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <ul>

                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                           </ul>
                           <button> <a href="#">Learn More</a> </button>
                        </div>

                        <div className="col-md-6">

                            <img src={ingredientsImg} />
                        </div>

                    </div>
                </div>
            </section>

            <section className="parallax">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>When a man's stomach is full it makes no <br /> difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br /> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href="#">Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meals">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>

                    <div className="row">

                        {mealsItem}
                    </div>

                </div>
            </section>

            <section className="sliderX">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>Testimoniol</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <Carousel>

                                <Carousel.Item>
                                    
                                    <img src= {testimoniol_1} />
                                    <br />
                                    <Carousel.Caption>
                                        <p>First slide label</p>
                                        <span>Nulla vitae elit libero, a pharetra augue mollis interdum.</span>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    
                                    <img src= {testimoniol_2} />

                                    <Carousel.Caption>
                                        <p>Second slide label</p>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

            </section>

            <section className="faq">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 col-sm-6">

                            <h6>~ Is Foodera Bread really baked fresh each day?</h6>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> 
                                and Consonantia, there live the blind texts. Separated they live in <br /> 
                                Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>

                        <div className="col-md-6 col-sm-6">

                            <h6>~ Do you bake breads containing animal fats or products?</h6>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> 
                                and Consonantia, there live the blind texts. Separated they live in <br /> 
                                Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>

                        <div className="col-md-6 col-sm-6">

                            <h6>~ Can I order your products online?</h6>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> 
                                and Consonantia, there live the blind texts. Separated they live in <br /> 
                                Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>

                        <div className="col-md-6 col-sm-6">

                            <h6>~ When are you opening a shop near me?</h6>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> 
                                and Consonantia, there live the blind texts. Separated they live in <br /> 
                                Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="parallax-2">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>Baked fresh daily by bakers with passion.</h2>
                            <button> <a href="#">Learn More</a> </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <h2>Hurry up! Subscribe our newsletter <br /> and get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <input type="email" placeholder="Email Address Here" />
                            <button> <a href="#">Subscribe</a> </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12">

                            <ul>

                                <li>Register</li>
                                <li>Forum</li>
                                <li>Affiliate</li>
                                <li>FAQ</li>
                            </ul>
                            <p>© 2024. Foodera. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
        
    )
}

export default Home