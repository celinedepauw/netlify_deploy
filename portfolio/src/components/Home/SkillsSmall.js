import React from 'react';
import { Link } from 'react-router-dom';

import match from '../../assets/images/boxe.svg';

const SkillsSmall = () => (
    <div className="skillsSmall">
        <div className="skillsSmall_title">
            <h3 className="skillsSmall_title_text">Le match : Hard skills vs Soft skills</h3>
            <img src={match} alt="match" className="skillsSmall_title_picture" />
        </div>
       
        <p className="skillsSmall_intro">Les deux sont importantes me direz-vous ! ça tombe bien, j'ai les 2 !</p>
        <p className="skillsSmall_link"><Link to="/competences" className="skillsSmall_match">Voir le match</Link></p>
         
 </div>
);

export default SkillsSmall;