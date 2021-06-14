import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSmall = () => (
    <div className="projectsSmall">
        <h3 className="projectsSmall_title">Mes projets Web</h3>
        <a href="https://github.com/celinedepauw" className="projectsSmall_github">Lien github</a>
        <Link to="/projects" className="projectsSmall_all">
            <div className="projectsSmall_one">O'Rando</div>
            <div className="projectsSmall_one">Projet 2</div>
            <div className="projectsSmall_one">Projet 3</div>
            <div className="projectsSmall_one">Projet 4</div>
        </Link>
    </div>
);

export default ProjectsSmall;