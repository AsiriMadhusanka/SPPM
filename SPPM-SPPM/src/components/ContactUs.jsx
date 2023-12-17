import React, { Component } from 'react'
import imgmap from '../images/map1.png';
import "./contact.css";

export default class ContactUs extends Component {
    render() {
        return (
            <div className="main-contact">
                <br/>


                <br/>
                <div className="map">
                    <img src={imgmap} className="d-block w-100" alt="..." />
                </div>

                <div className="deatails">
                    <hr/>
                    <div className="deatails-con">
                        <h1>UNIVERSAL MAIN SHOWROOM - BANDARAWELA</h1>
                        <h5>Hotline / WhatsApp : 0776609587</h5>
                        <h5> Telephone : 0332238000</h5>
                        <h5>(Lines Open from 9A.M. to 6P.M. : Closed on Tuesdays & Poya Holidays)</h5>

                        <h5>#5,</h5>
                        <h5>Holy Cross Road,</h5>
                        <h5>Bandarawela, Sri Lanka.</h5>
                        <h5> (Between the “Dialog Arcade” & “IOC Fuel Station”)</h5>

                        <h1>Hours of Operation</h1>
                        <h5>Monday : 9 AM – 6 PM</h5>
                        <h5>Tuesday : 9 AM – 6 PM</h5>
                        <h5>Wednesday : 9 AM – 6 PM</h5>
                        <h5>Thursday : 9 AM – 6 PM</h5>
                        <h5>Friday : 9 AM – 6 PM</h5>
                        <h5>Saturday : 9 AM – 6 PM</h5>
                        <h5>Sunday : 9 AM – 6 PM</h5>
                        <h4>Please note the outlet is closed on Poya Holidays.</h4>
                        <hr/>
                        <h2>Suggestions & Complains</h2>
                        <h5>Please be kind to send any complaints or suggestions as a text via WhatsApp or simply send a “Call me” SMS to “0704807223” to get a callback from the management for any suggestions & complains. In this way we try to see things from your perspective and increase the quality of our services. Also we are here to help you with any issues you might encounter and look forward to hear your feedback.</h5>
                        <hr/>
                        <h2>Careers</h2>
                        <h5>If you’re interested in employment opportunities at UNIVERSAL, please email us: info@universalcomputers.lk</h5>
                    </div>
                </div>

            </div>
        )
    }
}
