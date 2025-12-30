import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
  const phoneNumber = "6281234567890";

  const handleJoinNow = (plan) => {
    const message = `Hi! I'm interested in joining the ${plan.name} plan (${plan.price}/month). Can you provide more information about this membership package?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="plans-container" id="plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div 
            className="programs-header"
            style={{gap: '2rem'}}
        >
            <span className="stroke-text">READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroke-text">NOW WITH US</span>   
        </div>
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                    {plan.features.map((feature, i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                    </div>     
                    <div>
                        <span>See more benefits →</span>
                    </div>
                    <button className="btn" onClick={() => handleJoinNow(plan)}>Join now</button>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default Plans