import React, { useState } from 'react';
import './Gallery.css';
// Using existing images as placeholders
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('facilities');

  const handleGetStarted = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const facilitiesImages = [
    { src: image1, title: 'Cardio Zone', description: 'State-of-the-art cardio equipment' },
    { src: image2, title: 'Weight Training Area', description: 'Professional-grade weights and machines' },
    { src: image3, title: 'Functional Training', description: 'Versatile training space' },
    { src: image4, title: 'Group Class Studio', description: 'Spacious studio for all classes' },
    { src: image1, title: 'Boxing Ring', description: 'Professional boxing and martial arts area' },
    { src: image2, title: 'Yoga & Pilates Studio', description: 'Peaceful mind-body studio' },
  ];

  const transformations = [
    { before: image1, after: image2, name: 'John D.', result: 'Lost 25kg in 6 months' },
    { before: image3, after: image4, name: 'Sarah M.', result: 'Gained 8kg muscle' },
    { before: image1, after: image3, name: 'Mike R.', result: 'Body transformation in 4 months' },
    { before: image2, after: image4, name: 'Emma L.', result: 'Complete lifestyle change' },
  ];

  return (
    <div className="gallery-section" id="gallery">
      <div className="gallery-header">
        <span className="stroke-text">Our Gym </span>
        <span>& Transformations</span>
      </div>

      <div className="gallery-tabs">
        <button
          className={`tab-button ${activeTab === 'facilities' ? 'active' : ''}`}
          onClick={() => setActiveTab('facilities')}
        >
          Facilities
        </button>
        <button
          className={`tab-button ${activeTab === 'transformations' ? 'active' : ''}`}
          onClick={() => setActiveTab('transformations')}
        >
          Transformations
        </button>
      </div>

      {activeTab === 'facilities' && (
        <div className="facilities-grid">
          {facilitiesImages.map((item, index) => (
            <div key={index} className="facility-card">
              <img src={item.src} alt={item.title} />
              <div className="facility-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'transformations' && (
        <div className="transformations-grid">
          {transformations.map((item, index) => (
            <div key={index} className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={item.before} alt="Before" />
                    <span className="label">Before</span>
                  </div>
                  <div className="arrow">→</div>
                  <div className="image-container">
                    <img src={item.after} alt="After" />
                    <span className="label">After</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>{item.name}</h4>
                <p>{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="gallery-cta">
        <h3>Ready to Start Your Transformation?</h3>
        <button className="btn-cta" onClick={handleGetStarted}>Get Started Today</button>
      </div>
    </div>
  );
};

export default Gallery;
