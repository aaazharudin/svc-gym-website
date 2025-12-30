import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What are your operating hours?",
      answer: "We're open 24/7 for Elite and Platinum members. Starter members have access from 5 AM to 11 PM daily."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes! Personal training is included in our Elite and Platinum plans. Starter members can add personal training sessions at an additional cost."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year with advance notice. Contact our member services for details."
    },
    {
      question: "What equipment do you have?",
      answer: "We have state-of-the-art cardio machines, free weights, resistance training equipment, functional training zones, and specialized areas for CrossFit and HIIT workouts."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "Absolutely! All our plans include some level of nutrition guidance. Elite and Platinum members get customized meal plans from our certified nutritionists."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes! We offer a 7-day free trial for new members to experience our facilities and services before committing to a membership."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq">
      <div className="faq-header">
        <span className="stroke-text">Frequently Asked</span>
        <span> Questions</span>
      </div>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
