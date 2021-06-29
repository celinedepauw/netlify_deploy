import React from 'react';
import { Link } from 'react-router-dom';

import './movies.scss';

const Movies = () => (
        <div className="movies">
            <Link to="/" className="movies_return">Retour page accueil</Link>
            <h2 className="movies_title">Projet Movies</h2>
            <div className="movies_video">
                Démonstration du site Movies
            </div>
        </div>
);

export default Movies;