import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceSmall = () => (
        <div className="experienceSmall">
            <h3 className="experienceSmall_title">Mon parcours</h3>
            <p className="experienceSmall_intro">Comme tous les reconvertis, j'ai un parcours atypique, je vous laisse le découvrir...</p>
            <p className="experienceSmall_link"><Link to="/parcours" >C'est juste ici !</Link></p>
        </div>
    );

export default ExperienceSmall;