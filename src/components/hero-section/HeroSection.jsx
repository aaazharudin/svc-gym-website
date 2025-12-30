import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'
import { Link } from 'react-scroll';

import {motion} from 'framer-motion'

const HeroSection = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false;

    const phoneNumber = "6281234567890";

    const handleJoinNow = () => {
        const message = "Hi! I'm interested in joining your gym. Can you provide more information about membership?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="hero" id="home">
            <Header />
            <div className="hero-gradient-bg"></div>

            <div className="hero-wrapper">
                <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>✨ Transform Your Body, Transform Your Life</span>
                </motion.div>

                <motion.div
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1>
                        Build Your <span className="highlight">Dream Physique</span>
                    </h1>
                    <p className="hero-description">
                        Join our elite fitness community and unlock your full potential with personalized training programs and expert guidance
                    </p>
                </motion.div>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to='plans'
                        spy={true}
                        smooth={true}
                        className="btn-primary"
                        style={{ cursor: 'pointer' }}
                    >
                        Get Started →
                    </Link>
                    <Link
                        to='programs'
                        spy={true}
                        smooth={true}
                        className="btn-secondary"
                        style={{ cursor: 'pointer' }}
                    >
                        Explore Programs
                    </Link>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="stat-card">
                        <div className="stat-icon">👨‍🏫</div>
                        <div className="stat-number">
                            <NumberCounter
                                end={10}
                                start={1}
                                delay="3"
                                preFix="+"
                            />
                        </div>
                        <div className="stat-label">Expert Trainers</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🏋️</div>
                        <div className="stat-number">
                            <NumberCounter
                                end={200}
                                start={100}
                                delay="3"
                                preFix="+"
                            />
                        </div>
                        <div className="stat-label">Active Members</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">📋</div>
                        <div className="stat-number">
                            <NumberCounter
                                end={20}
                                start={1}
                                delay="3"
                                preFix="+"
                            />
                        </div>
                        <div className="stat-label">Training Programs</div>
                    </div>
                </motion.div>
                </div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="image-glow"></div>
                    <img src={hero_image} alt="Fitness" className="hero-main-image" />
                </motion.div>
            </div>
        </div>
  )
}

export default HeroSection