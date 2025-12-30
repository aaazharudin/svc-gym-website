import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png';
import TikTok from '../../assets/tik-tok.png';

const Footer = () => {
  // Update these URLs with your actual social media handles
  const socialLinks = {
    instagram: "https://www.instagram.com/yourgymnamehere",
    tiktok: "https://www.tiktok.com/@yourgymnamehere"
  };

  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="footer-content">
                <h3 className="footer-heading">Join Our Fitness Community</h3>
                <p className="footer-subtitle">Follow us for daily workout tips, transformation stories, and exclusive offers!</p>
            </div>
            <div className="social-links">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram"/>
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  <img src={TikTok} alt="TikTok"/>
                </a>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer