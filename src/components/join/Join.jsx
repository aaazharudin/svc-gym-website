import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Join.css'

const Join = () => {

    const handleJoinNow = () => {
        const plansSection = document.getElementById('plans');
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <div className="email-container">
                    <p className="join-description">
                        Choose the perfect plan for your fitness journey
                    </p>
                    <button className="btn btn-j" onClick={handleJoinNow}>
                        View Plans →
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Join;