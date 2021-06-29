import React from 'react';
import { Link } from 'react-router-dom';

import './orando.scss';

const Orando = () => (
        <div className="orando">
            <Link to="/" className="orando_return">Retour page accueil</Link>
            <h2 className="orando_title">Projet Orando</h2>
            <div className="orando_video">
                Démonstration du site Orando
            </div>
        </div>
);

export default Orando;