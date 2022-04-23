import React from 'react';
import { Link } from 'react-router-dom';

import beautyfull from '../../assets/demos/demo_beautyfull.mp4';
import logo from '../../assets/images/lotus.png'

import './beautyfull.scss';

const Beautyfull = () => (
        <div className="beautyfull">
            <Link to="/projets" className="beautyfull_return">Retour page projets</Link>
            <div className="beautyfull_title">
            <h2 className="beautyfull_text">Projet Beautyfull</h2>
            <img className="beautyfull_logo" src={logo} />
            </div>
            <video controls src={beautyfull} className="beautyfull_video">Vidéo de présentation du site Beautyfull</video>
            <p className="beautyfull_description">(durée : 40 secondes)</p>
        </div>
);

export default Beautyfull;