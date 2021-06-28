import React from 'react';
import { Link } from 'react-router-dom';

import parcours from '../../assets/images/parcours.svg';

const ExperienceSmall = () => (
        <div className="experienceSmall">
            <div className="experienceSmall_title">
            <h3 className="experienceSmall_title_text">Mon parcours</h3>
            <img src={parcours} alt="parcours" className="experienceSmall_title_picture" />
            </div>        
            <p className="experienceSmall_intro">Comme tous les reconvertis, j'ai un parcours atypique, je vous laisse le découvrir...</p>
            <p className="experienceSmall_link"><Link to="/parcours" >C'est juste ici !</Link></p>
        </div>
    );

export default ExperienceSmall;