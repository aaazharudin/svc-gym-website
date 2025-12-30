import React, { useState } from 'react';
import './ClassSchedule.css';

const ClassSchedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  // Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScb1FpClOMnJsUTPuekiO4LZJZ1tNGZcj6OMka8hZNPyPtQjA/viewform";

  // Convert 12-hour time format to 24-hour format
  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const handleBookClass = (classItem, day) => {
    // Convert time to 24-hour format for Google Form
    const time24h = convertTo24Hour(classItem.time);

    const formUrl = new URL(GOOGLE_FORM_URL);
    formUrl.searchParams.append('entry.1105150597', classItem.class); // Nama Kelas
    formUrl.searchParams.append('entry.1238945204', day); // Hari
    formUrl.searchParams.append('entry.360368', time24h); // Waktu (24-hour format)
    formUrl.searchParams.append('entry.154932447', classItem.trainer); // Trainer

    window.open(formUrl.toString(), '_blank');
  };

  const schedule = {
    Monday: [
      { time: '06:00 AM', class: 'Yoga Flow', trainer: 'Sarah Mitchell', duration: '60 min' },
      { time: '09:00 AM', class: 'HIIT Cardio', trainer: 'Marcus Johnson', duration: '45 min' },
      { time: '12:00 PM', class: 'Strength Training', trainer: 'Alex Chen', duration: '60 min' },
      { time: '05:00 PM', class: 'Boxing', trainer: 'Emma Rodriguez', duration: '50 min' },
      { time: '07:00 PM', class: 'Spin Class', trainer: 'David Lee', duration: '45 min' },
    ],
    Tuesday: [
      { time: '06:00 AM', class: 'CrossFit', trainer: 'Marcus Johnson', duration: '60 min' },
      { time: '09:30 AM', class: 'Pilates', trainer: 'Sarah Mitchell', duration: '50 min' },
      { time: '12:00 PM', class: 'Functional Training', trainer: 'Alex Chen', duration: '55 min' },
      { time: '05:30 PM', class: 'Zumba', trainer: 'Emma Rodriguez', duration: '60 min' },
      { time: '07:00 PM', class: 'Power Lifting', trainer: 'David Lee', duration: '75 min' },
    ],
    Wednesday: [
      { time: '06:00 AM', class: 'Yoga Flow', trainer: 'Sarah Mitchell', duration: '60 min' },
      { time: '09:00 AM', class: 'HIIT Cardio', trainer: 'Marcus Johnson', duration: '45 min' },
      { time: '12:00 PM', class: 'Bodyweight Training', trainer: 'Alex Chen', duration: '50 min' },
      { time: '05:00 PM', class: 'Kickboxing', trainer: 'Emma Rodriguez', duration: '60 min' },
      { time: '07:00 PM', class: 'Spin Class', trainer: 'David Lee', duration: '45 min' },
    ],
    Thursday: [
      { time: '06:00 AM', class: 'Vinyasa Yoga', trainer: 'Sarah Mitchell', duration: '60 min' },
      { time: '09:30 AM', class: 'Circuit Training', trainer: 'Marcus Johnson', duration: '50 min' },
      { time: '12:00 PM', class: 'Core & Abs', trainer: 'Alex Chen', duration: '45 min' },
      { time: '05:30 PM', class: 'Dance Fitness', trainer: 'Emma Rodriguez', duration: '55 min' },
      { time: '07:00 PM', class: 'Olympic Lifting', trainer: 'David Lee', duration: '70 min' },
    ],
    Friday: [
      { time: '06:00 AM', class: 'Morning Stretch', trainer: 'Sarah Mitchell', duration: '45 min' },
      { time: '09:00 AM', class: 'Bootcamp', trainer: 'Marcus Johnson', duration: '60 min' },
      { time: '12:00 PM', class: 'Strength & Conditioning', trainer: 'Alex Chen', duration: '60 min' },
      { time: '05:00 PM', class: 'Boxing', trainer: 'Emma Rodriguez', duration: '50 min' },
      { time: '07:00 PM', class: 'Spin & Core', trainer: 'David Lee', duration: '60 min' },
    ],
    Saturday: [
      { time: '08:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell', duration: '75 min' },
      { time: '10:00 AM', class: 'HIIT Blast', trainer: 'Marcus Johnson', duration: '45 min' },
      { time: '12:00 PM', class: 'Full Body Workout', trainer: 'Alex Chen', duration: '60 min' },
      { time: '02:00 PM', class: 'Martial Arts', trainer: 'Emma Rodriguez', duration: '90 min' },
    ],
    Sunday: [
      { time: '08:00 AM', class: 'Gentle Yoga', trainer: 'Sarah Mitchell', duration: '60 min' },
      { time: '10:00 AM', class: 'Recovery Stretch', trainer: 'Marcus Johnson', duration: '50 min' },
      { time: '12:00 PM', class: 'Active Recovery', trainer: 'Alex Chen', duration: '45 min' },
    ],
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="class-schedule" id="schedule">
      <div className="schedule-header">
        <span className="stroke-text">Class </span>
        <span>Schedule</span>
      </div>

      <div className="schedule-subtitle">
        Join our expert-led classes designed for all fitness levels
      </div>

      <div className="schedule-days">
        {days.map((day) => (
          <button
            key={day}
            className={`day-button ${activeDay === day ? 'active' : ''}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-classes">
        {schedule[activeDay].map((item, index) => (
          <div key={index} className="class-card">
            <div className="class-time">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{item.time}</span>
            </div>
            <div className="class-details">
              <h3>{item.class}</h3>
              <div className="class-meta">
                <span className="trainer">👤 {item.trainer}</span>
                <span className="duration">⏱ {item.duration}</span>
              </div>
            </div>
            <button className="btn-book" onClick={() => handleBookClass(item, activeDay)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
