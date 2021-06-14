import React from 'react';
import { Link } from 'react-router-dom';

const SkillsSmall = () => (
    <div className="skillsSmall">
        <h3 className="skillsSmall_title">Le match : Hard skills vs Soft skills</h3>
        <p className="skillsSmall_intro">Bla bla bla</p>
        <p className="skillsSmall_link"><Link to="/skills" className="skillsSmall_match">Voir le match</Link></p>
         
 </div>
);

export default SkillsSmall;