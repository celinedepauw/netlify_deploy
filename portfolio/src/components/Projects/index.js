import React from 'react';
import { Link } from 'react-router-dom';
import { datas } from "./data";

import './projects.scss';

const Projects = () => (
        <div className="projects">
            <Link to="/" className="projects_return">Retour page accueil</Link>
            <h2 className="projects_title">Mes projets Web</h2>
            {datas.map((project) => (
                <div
                    className="project"
                    key={project.image}
                >
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_subtitle">{project.subtitle}</p>
                    <p className="project_description">{project.description}</p>
                    <p className="project_link"><Link to="/TODO">Voir le projet</Link></p>
                </div>
            ))}
        </div>
);

export default Projects;