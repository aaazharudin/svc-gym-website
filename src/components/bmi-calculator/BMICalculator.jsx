import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      // Determine category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  const getCategoryColor = () => {
    if (category === 'Underweight') return '#ffa739';
    if (category === 'Normal') return '#00ffaa';
    if (category === 'Overweight') return '#ffa739';
    if (category === 'Obese') return '#fa5042';
    return 'white';
  };

  return (
    <div className="bmi-calculator" id="bmi">
      <div className="bmi-header">
        <span className="stroke-text">Calculate Your </span>
        <span>BMI</span>
      </div>

      <div className="bmi-content">
        <div className="bmi-info">
          <h3>Body Mass Index</h3>
          <p>
            BMI is a measure of body fat based on height and weight.
            Calculate your BMI to understand your body composition and get
            personalized fitness recommendations.
          </p>

          <div className="bmi-ranges">
            <div className="range-item">
              <span className="range-label">Underweight:</span>
              <span className="range-value">&lt; 18.5</span>
            </div>
            <div className="range-item">
              <span className="range-label">Normal:</span>
              <span className="range-value">18.5 - 24.9</span>
            </div>
            <div className="range-item">
              <span className="range-label">Overweight:</span>
              <span className="range-value">25 - 29.9</span>
            </div>
            <div className="range-item">
              <span className="range-label">Obese:</span>
              <span className="range-value">≥ 30</span>
            </div>
          </div>
        </div>

        <div className="bmi-calculator-box">
          <form onSubmit={calculateBMI}>
            <div className="input-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                required
                min="1"
                step="0.1"
              />
            </div>

            <div className="input-group">
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                required
                min="1"
                step="0.1"
              />
            </div>

            <div className="bmi-buttons">
              <button type="submit" className="btn btn-calculate">
                Calculate BMI
              </button>
              <button type="button" className="btn btn-reset" onClick={resetCalculator}>
                Reset
              </button>
            </div>
          </form>

          {bmi && (
            <div className="bmi-result">
              <h3>Your Results</h3>
              <div className="result-bmi">
                <span className="bmi-value">{bmi}</span>
                <span className="bmi-unit">BMI</span>
              </div>
              <div className="result-category" style={{ color: getCategoryColor() }}>
                {category}
              </div>
              <p className="result-message">
                {category === 'Normal'
                  ? "Great! You're in the healthy range. Keep up the good work!"
                  : category === 'Underweight'
                  ? "Consider a muscle-building program with proper nutrition."
                  : category === 'Overweight'
                  ? "Our weight loss programs can help you reach your goals!"
                  : "Let our expert trainers create a personalized plan for you."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
