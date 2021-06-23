import React from 'react';
import { Link } from 'react-router-dom';
import { datas } from "./data";

import './projects.scss';

const Projects = () => (
        <div className="projects">
            <Link to="/" className="projects_return">Retour page accueil</Link>
            <h2 className="projects_title">Mes projets Web</h2>
            {datas.map((project) => (
                <div className="project">
                    <a 
                        href={project.link}
                        key={project.title}
                    >
                        <div className="project_title">{project.title}</div>
                        <div className="project_subtitle">{project.subtitle}</div>
                        <div className="project_description">{project.description}</div>
                    </a>
                  
                </div>
            ))}
        </div>
);

export default Projects;