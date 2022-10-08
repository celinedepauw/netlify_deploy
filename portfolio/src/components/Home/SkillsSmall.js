import React from 'react';
import { Link } from 'react-router-dom';

import skills from '../../assets/images/skills.png';

const SkillsSmall = () => (
    <div className="skillsSmall">
        <div className="skillsSmall_title">
            <h3 className="skillsSmall_title_text">Mes atouts</h3>
            <img src={skills} alt="match" className="skillsSmall_title_picture" />
        </div>
       
        <p className="skillsSmall_intro">Que puis-je apporter à votre équipe ? Si vous saviez...</p>
        <p className="skillsSmall_link"><Link to="/competences" className="skillsSmall_match">Voir le détail</Link></p>
         
 </div>
);

export default SkillsSmall;