import React from 'react';
import { Link } from 'react-router-dom';

const SkillsSmall = () => (
    <div className="skillsSmall">
        <h3 className="skillsSmall_title">Le match : Hard skills vs Soft skills</h3>
        <Link to="/skills" className="skillsSmall_all">
            <div className="skillsSmall_hardSkills">Hard skills</div>
            <div className="skillsSmall_softSkills">Soft skills</div>    
        </Link>
         
 </div>
);

export default SkillsSmall;