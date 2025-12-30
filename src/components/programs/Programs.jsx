import React, { useState } from 'react';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import ProgramModal from './ProgramModal';

import './Programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program, index) => (
                <div className="category" key={index} onClick={() => handleJoinClick(program)}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>
            ))}
        </div>

        {isModalOpen && (
            <ProgramModal
                program={selectedProgram}
                onClose={handleCloseModal}
            />
        )}
    </div>
  )
}

export default Programs;