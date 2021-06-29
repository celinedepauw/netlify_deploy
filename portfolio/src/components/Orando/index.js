import React from 'react';
import { Link } from 'react-router-dom';

import orando from '../../assets/demos/demo_orando.mp4';

import './orando.scss';

const Orando = () => (
        <div className="orando">
            <Link to="/projets" className="orando_return">Retour page projets</Link>
            <h2 className="orando_title">Projet Orando</h2>
            <video controls src={orando} className="orando_video">Vidéo de présentation du site Orando</video>
        </div>
);

export default Orando;