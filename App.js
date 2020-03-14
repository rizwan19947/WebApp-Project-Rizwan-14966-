import React, { Component } from 'react';
import './App.css';



class App extends Component {

    render() {
        return (
            

            <div className="App">

               


                {/*header start*/}
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid">
                                <div className="header_bottom_border">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="logo">
                                                <a href="index.html">
                                                    <img src="img/logo.png" alt="" height={60} width={80} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><a className="active" href="index.html">home</a></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a className href="travel_destination.html">Destination</a>
                                                        </li><li><a href="#">pages <i className="ti-angle-down" /></a>
                                                            <ul className="submenu">
                                                                <li><a href="destination_details.html">Destinations details</a></li>
                                                                <li><a href="elements.html">elements</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">blog <i className="ti-angle-down" /></a>
                                                            <ul className="submenu">
                                                                <li><a href="blog.html">blog</a></li>
                                                                <li><a href="single-blog.html">single-blog</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                                            <div className="social_wrap d-flex align-items-center justify-content-end">
                                                <div className="number">
                                                    <p> <i className="fa fa-phone" />+923082565359</p>
                                                </div>
                                                <div className="social_links d-none d-xl-block">
                                                    <ul>
                                                        <li><a href="https://www.instagram.com/akaystravel/"> <i className="fa fa-instagram" /> </a></li>
                                                        <li><a href="https://www.facebook.com/akaystravels"> <i className="fa fa-facebook" /> </a></li>
                                                        <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=info@akaystravels.com"> <i className="fa fa-google-plus" /> </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seach_icon">
                                            <a data-toggle="modal" data-target="#exampleModalCenter" href="#">
                                                <i className="fa fa-search" />
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*header end*/}

                {/*bradcam area*/}
                <div className="bradcam_area bradcam_bg_2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">
                                    <h3>Destinations</h3>
                                    <p>Pixel perfect design with awesome contents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*bradcam area*/}



                {/*where to go area*/}
                <div className="where_togo_area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="form_area">
                                    <h3>Where you want to go?</h3>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="search_wrap">
                                    <form className="search_form" action="#">
                                        <div className="input_field">
                                            <input type="text" placeholder="Where to go?" />
                                        </div>
                                        <div className="input_field">
                                            <input id="datepicker" placeholder="Date" />
                                        </div>
                                        <div className="input_field">
                                            <select>
                                                <option data-display="Travel type">Travel type</option>
                                                <option value={1}>Some option</option>
                                                <option value={2}>Another option</option>
                                            </select>
                                        </div>
                                        <div className="search_btn">
                                            <button className="boxed-btn4 " type="submit">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*where to go area*/}


                {/*popular places area*/}
                <div className="popular_places_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="filter_result_wrap">
                                    <h3>Filter Result</h3>
                                    <div className="filter_bordered">
                                        <div className="filter_inner">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="single_select">
                                                        <select>
                                                            <option data-display="Country">Country</option>
                                                            <option value={1}>Africa</option>
                                                            <option value={2}>canada</option>
                                                            <option value={4}>USA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="single_select">
                                                        <select>
                                                            <option data-display="Travel type">Travel type</option>
                                                            <option value={1}>advance</option>
                                                            <option value={2}>advance</option>
                                                            <option value={4}>premium</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="range_slider_wrap">
                                                        <span className="range">Prise range</span>
                                                        <div id="slider-range" />
                                                        <p>
                                                            <input type="text" id="amount" readOnly style={{ border: 0, color: '#7A838B', fontWeight: 400 }} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="reset_btn">
                                            <button className="boxed-btn4" type="submit">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/1.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>California</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/2.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>Korola Megna</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/3.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>London</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/4.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>Miami Beach</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/5.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>California</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single_place">
                                            <div className="thumb">
                                                <img src="img/place/6.png" alt="" />
                                                <a href="#" className="prise">$500</a>
                                            </div>
                                            <div className="place_info">
                                                <a href="destination_details.html"><h3>Saintmartine Iceland</h3></a>
                                                <p>United State of America</p>
                                                <div className="rating_days d-flex justify-content-between">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <a href="#">(20 Review)</a>
                                                    </span>
                                                    <div className="days">
                                                        <i className="fa fa-clock-o" />
                                                        <a href="#">5 Days</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="more_place_btn text-center">
                                            <a className="boxed-btn4" href="#">More Places</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*popular places area*/}


                {/*newsletter area*/}
                <div className="newletter_area overlay">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-10">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="newsletter_text">
                                            <h4>Subscribe Our Newsletter</h4>
                                            <p>Subscribe newsletter to get offers and about
                      new places to discover.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="mail_form">
                                            <div className="row no-gutters">
                                                <div className="col-lg-9 col-md-8">
                                                    <div className="newsletter_field">
                                                        <input type="email" placeholder="Your mail" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4">
                                                    <div className="newsletter_btn">
                                                        <button className="boxed-btn4 " type="submit">Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*newsletter area*/}


                {/*Recent Trip Area*/}
                <div className="recent_trip_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section_title text-center mb_70">
                                    <h3>Recent Trips</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single_trip">
                                    <div className="thumb">
                                        <img src="img/trip/1.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>Oct 12, 2019</span>
                                        </div>
                                        <a href="#">
                                            <h3>Journeys Are Best Measured In
                      New Friends</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_trip">
                                    <div className="thumb">
                                        <img src="img/trip/2.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>Oct 12, 2019</span>
                                        </div>
                                        <a href="#">
                                            <h3>Journeys Are Best Measured In
                      New Friends</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_trip">
                                    <div className="thumb">
                                        <img src="img/trip/3.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>Oct 12, 2019</span>
                                        </div>
                                        <a href="#">
                                            <h3>Journeys Are Best Measured In
                      New Friends</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Recent Trip Area*/}


                {/*Footer*/}
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4 ">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <a href="#">
                                                <img src="img/logo.png" alt="" height={100} width={100} />
                                            </a>
                                        </div>
                                        <p>Behind Tooso, Bahdrabad <br /> Karachi <br />
                                            <a href="#">+92 308 2565359</a> <br />
                                            <a href="#">
                                                info@akaystravels.com</a>
                                        </p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/akaystravels">
                                                        <i className="ti-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-youtube-play" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Company
                  </h3>
                                        <ul className="links">
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#"> Gallery</a></li>
                                            <li><a href="#"> Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Popular destination
                  </h3>
                                        <ul className="links double_links">
                                            <li><a href="#">Indonesia</a></li>
                                            <li><a href="#">America</a></li>
                                            <li><a href="#">India</a></li>
                                            <li><a href="#">Switzerland</a></li>
                                            <li><a href="#">Italy</a></li>
                                            <li><a href="#">Canada</a></li>
                                            <li><a href="#">Franch</a></li>
                                            <li><a href="#">England</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Instagram
                  </h3>
                                        <div className="instagram_feed">
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/3.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/4.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/5.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="img/instagram/6.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </footer>
                {/*Footer*/}

                {/*Modal*/}
                <div className="modal fade custom_search_pop" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="serch_form">
                                <input type="text" placeholder="Search" />
                                <button type="submit">search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Modal*/}






            </div>


        );
    }



}

export default App;

