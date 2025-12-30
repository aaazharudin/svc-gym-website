import React from 'react';
import { trainersData } from '../../data/trainersData';
import './Trainers.css';

const Trainers = () => {
  return (
    <div className="trainers-section" id="trainers">
      <div className="trainers-header">
        <span className="stroke-text">Meet Our </span>
        <span>Expert Trainers</span>
      </div>

      <div className="trainers-subtitle">
        Work with certified professionals dedicated to your fitness journey
      </div>

      <div className="trainers-grid">
        {trainersData.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-overlay">
                <span className="specialty">{trainer.specialty}</span>
              </div>
            </div>

            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p className="trainer-bio">{trainer.bio}</p>

              <div className="trainer-credentials">
                <div className="credential-item">
                  <span className="label">Experience:</span>
                  <span className="value">{trainer.experience}</span>
                </div>
                <div className="credential-item">
                  <span className="label">Certification:</span>
                  <span className="value">{trainer.certification}</span>
                </div>
              </div>

              <div className="achievements">
                {trainer.achievements.map((achievement, i) => (
                  <span key={i} className="achievement-badge">
                    ✓ {achievement}
                  </span>
                ))}
              </div>

              <button className="btn-contact-trainer">Book Session</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
