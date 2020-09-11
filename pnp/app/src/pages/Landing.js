import React, {useState} from 'react'
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
    const [email, setEmail] = useState('')

    const submit = (evt) => {
        evt.preventDefault();
        document.querySelector('.input_button').classList.remove('inputComplete')

        fetch('api/email')
            .then(response => response.json())
    }

    const isInputComplete = (string) =>{
        let re = /\.com/g
        if (string.match(re)){
            document.querySelector('.input_button').classList.add('inputComplete')
        } else {
            document.querySelector('.input_button').classList.remove('inputComplete')

        }
    }
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
                        <h3>Step 1. Enter your email</h3>
                        <form onSubmit={submit}>
                            <input 
                                className="input_email" 
                                type="text" 
                                name="email" 
                                value={email}
                                onChange={e=> {
                                    setEmail(e.target.value)
                                    isInputComplete(e.target.value)
                                }}
                                placeholder="email" />
                            <input className="input_button" type="submit" value="next" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing
