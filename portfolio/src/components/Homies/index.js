import React from 'react';
import { Link } from 'react-router-dom';

import homies from '../../assets/demos/demo_homies.mp4';

import './homies.scss';

const Homies = () => (
        <div className="homies">
            <Link to="/projets" className="homies_return">Retour page projets</Link>
            <div className="homies_title">
            <h2 className="homies_text">Projet de gestion de projets immobiliers</h2>
            </div>
            <video controls src={homies} className="homies_video">Vidéo de présentation du site de gestion de projets immobiliers</video>
            <p className="homies_description">(durée : 37 secondes)</p>
        </div>
);

export default Homies;