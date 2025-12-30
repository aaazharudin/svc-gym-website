import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'

import {motion} from 'framer-motion'

const HeroSection = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile ? "165px" : "238px"}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: "tween"}}
                    ></motion.div>
                    <span>Transform Your Body, Transform Your Life</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Build </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Dream Physique</span>
                    </div>
                    <div>
                        <span>
                            Join our elite fitness community and unlock your full potential with personalized training programs and expert guidance
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter
                                end={200}
                                start={100}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>certified trainers</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={1500}
                                start={1000}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>active members</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={75}
                                start={20}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>training programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>

            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div 
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back} 
                    alt=""
                    className="hero-image-back" 
                />
                <motion.div 
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>  
            </div>
        </div>
  )
}

export default HeroSection