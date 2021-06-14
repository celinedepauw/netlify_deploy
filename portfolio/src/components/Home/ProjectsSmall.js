import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSmall = () => (
    <div className="projectsSmall">
        <h3 className="projectsSmall_title">Mes projets Web</h3>
        <p className="projectsSmall_intro">J'ai commencé à coder en octobre 2020, mais j'ai déjà des choses à vous montrer !</p>
        <p className="projectsSmall_link"><Link to="/projects">C'est par là</Link></p>
    </div>
);

export default ProjectsSmall;