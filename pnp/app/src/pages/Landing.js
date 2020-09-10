import React from 'react'
/* import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap'; */
import AppNavbar from '../components/AppNavbar';
import './Landing.css';

/**
 * Landing Page for sharers
 * 
 * @Component
 * @todo add functionality
 */
function Landing() {
    return (
        <>
            <AppNavbar/>

            <div className="Landing">
                <div className="Landing_left"> 
                    <div className="Landing_title">
                        <h1>Tricking Your Conservative <br/>
                            Relatives Into Donating to <br/>
                            Liberal Nonprofits</h1>

                    </div>
                
                </div>

                <div className="Landing_right"> 
                    <div className="Landing_form">
                        <h2>Step 1. Enter your email</h2>
                    </div>
                
                </div>

            </div>

        </>
    )
}

export default Landing
