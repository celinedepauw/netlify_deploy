import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

const Error = () => (
  <div className="error">
    <Link to="/" className="error_return">Retour page accueil</Link>
    <h2 className="error_title">Page introuvable</h2>
    <p className="error_text">Oups ! La page demandée n'existe pas, il doit y avoir une erreur de chemin...</p>
  </div>
);

export default Error;