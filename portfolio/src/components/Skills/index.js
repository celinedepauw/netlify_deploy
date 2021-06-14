import React from 'react';
import { Link } from 'react-router-dom';

import './skills.scss';

const Skills = () => (
        <div className="skills">
            <Link to="/" className="skills_return">Retour page accueil</Link>
            <h2 className="skills_title">Le match : Hard skills vs Soft skills</h2> 
            <p>Go go go !!!</p>
        </div>
);

export default Skills;