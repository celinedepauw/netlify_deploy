import React from 'react';
import { Link } from 'react-router-dom';

import searchMovie from '../../assets/demos/demo_searchMovie.mp4';

import './searchMovie.scss';

const SearchMovie = () => (
        <div className="searchMovie">
            <Link to="/projets" className="searchMovie_return">Retour page projets</Link>
            <h2 className="searchMovie_title">Projet Recherche de films</h2>
            <video controls src={searchMovie} className="searchMovie_video">Vidéo de présentation du site qui recherche des films</video>
            <p className="searchMovie_description">A partir de l'API The Movie DB (durée : 1 minute)</p>
        </div>
);

export default SearchMovie;