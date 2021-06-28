import React from 'react';
import { Link } from 'react-router-dom';

import desktop from '../../assets/images/monitor.svg';

const ProjectsSmall = () => (
    <div className="projectsSmall">
        <div className="projectsSmall_title">
            <h3 className="projectsSmall_title_text">Mes projets Web</h3>
            <img src={desktop} alt="projects" className="projectsSmall_title_picture" />
        </div>
        
        <p className="projectsSmall_intro">J'ai commencé à coder en octobre 2020, mais j'ai déjà des choses à vous montrer !</p>
        <p className="projectsSmall_link"><Link to="/projets">C'est par là</Link></p>
    </div>
);

export default ProjectsSmall;