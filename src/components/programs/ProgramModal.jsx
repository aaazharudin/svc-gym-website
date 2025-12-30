import React from 'react';
import './ProgramModal.css';

const ProgramModal = ({ program, onClose }) => {
  const phoneNumber = "6281234567890";

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in joining the ${program.heading} program. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!program) return null;

  return (
    <div className="program-modal-overlay" onClick={onClose}>
      <div className="program-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <div className="modal-icon">{program.image}</div>
          <h2>{program.heading}</h2>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>About This Program</h3>
            <p>{program.details}</p>
          </section>

          <section className="modal-section">
            <h3>Class Schedule</h3>
            <ul className="schedule-list">
              {program.schedule.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>Pricing Options</h3>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h4>Monthly</h4>
                <p className="price">{program.pricing.monthly}</p>
              </div>
              <div className="pricing-card popular">
                <h4>Quarterly</h4>
                <p className="price">{program.pricing.quarterly}</p>
                <span className="badge">Most Popular</span>
              </div>
              <div className="pricing-card">
                <h4>Yearly</h4>
                <p className="price">{program.pricing.yearly}</p>
              </div>
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <button className="btn-join" onClick={handleWhatsApp}>
            Join via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
