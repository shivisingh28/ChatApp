import React,{Component} from 'react';
import Header from '../../Components/Header';
//import Footer from '../../Components/Footer';
import './Home.css';
//import Images from '../../ProjectImages/ProjectImages';
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
                </div>
            </div>
            </div>
        );
    }
}