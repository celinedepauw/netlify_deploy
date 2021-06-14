import React from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';

const Projects = () => (
        <div className="projects">
            <Link to="/" className="projects_return">Retour page accueil</Link>
            <h2 className="projects_title">Mes projets Web</h2>
            <div>O'Rando</div>
            <div>Projet 2</div>
            <div>Projet 3</div>
            <div>Projet 4</div>
        </div>
);

export default Projects;