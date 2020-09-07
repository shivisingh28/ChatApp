import React,{Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import Images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    render(){
        return(
            <div>
            <Header/>
            <div className="splash-container">
                <div className="splash">
                    <h1 className="splash-head">WEB CHAT APP</h1>
                    <p className="splash-subhead">
                        Let's talk with our loved ones
                    </p>
                    <div id="custom-button-wrapper">
                        <Link to='/login'>
                        
                            <a className="my-super-cool-btn">
                                <div className="dots-container">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <span className="buttoncooltext">Get Started</span>
                            </a>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    
                    <h2 className="content-head is-center">Features of Web Chat Application</h2>
                   <div className="Appfeatures">
                    <div className="contenthead">
                        <h3 className="content-subhead">
                            <i className="fa-fa-rocket"></i>
                            Get Started Quickly
                        </h3>
                        <p> Just Register yourself with this app and start chatting with your loved ones</p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <h3 className="content-subhead">
                            <i className="fa fa-sign-in"></i>
                            Firebase Authentication
                        </h3>
                        <p>
                            Firebase Authentication has been implemented in this app
                        </p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 ">
                        <h3 className="content-subhead">
                            <i className="fa fa-th-large"></i>
                            Media
                        </h3>
                        <p> 
                            You can share images with your friends for better experience
                        </p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 ">
                        <h3 className="content-subhead">
                            <i className="fa fa-refresh"></i>
                            Updates
                        </h3>
                        <p>
                            We are working on new features for this app for better user experience
                        </p>
                    </div>
                </div>
            </div>
            <div className="AppfeaturesFounder">
                <div className="l-box-lrg is-center pure-u-md-1-2 pure-u-lg-2-5">
                    <img width="300" alt="File Icons" className="pure-img-responsive" src={Images.profile}/>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                    <h2 className="content-head content-head-ribbon">Shivangi Singh</h2>
                    <p style={{color:'white'}}>
                        An Enthusiastic Front end Developer
                    </p>
                    <p style={{color:'white'}}>
                        Currently working on developing skills in React.js and exploring new ideas by learning new technolgies
                    </p>
                </div>
            </div>
            <div className="content">
                <h2 className="content-head is-center">Who Am I ?</h2>
            <div className="Appfeatures">
                <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <label for="name">Your Name</label>
                            <input id="name" type="text" placeholder="Your Name"/>

                            <label for="email">Your email</label>
                            <input id="email" type="email" placeholder="Your email"/>

                            <label for="password">Your Password</label>
                            <input id="password" type="password" placeholder="Your Password"/>

                            <button type="submit" className="pure-button">Sign Up</button>

                        </fieldset>
                    </form>
                </div>
                <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                    <h4>Contact Us</h4>
                    <p>
                        For any query or feedback you can directly contact me on my Facebook Page:
                        <a href="https://www.facebook.com/shivangi.singh.73550">https://www.facebook.com/shivangi.singh.73550/</a>
                    </p>
                    <p>
                        LinkedIn:
                        <a href="https://www.linkedin.com/in/shivangi-singh-b65381158">https://www.linkedin.com/in/shivangi-singh-b65381158</a>
                    </p>
                    <p>
                        Instagram:
                        <a href="https://www.instagram.com/shivi__singh28/">https://www.instagram.com/shivi__singh28/</a>
                    </p>
                    <p>
                        Twitter:
                        <a href="https://twitter.com/shivisingh28">https://twitter.com/shivisingh28</a>
                    </p>

                    <h4>More Information</h4>
                    <p>
                        To whomsoever it may concern
                    </p>
                    <p>
                        This app is developed as a part of my learning of React.js-
                          Developed by- Shivangi Singh (shivi__singh28)
                    </p>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
           
            </div>
        );
    }
}