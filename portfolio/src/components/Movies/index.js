import React from 'react';
import { Link } from 'react-router-dom';

import movies from '../../assets/demos/demo_movies.mp4';

import './movies.scss';

const Movies = () => (
        <div className="movies">
            <Link to="/projets" className="movies_return">Retour page projets</Link>
            <h2 className="movies_title">Projet Movies</h2>
            <video controls src={movies} className="movies_video">Vidéo de présentation du site Movies</video>
        </div>
);

export default Movies;