import React from 'react';
import { Link } from 'react-router-dom';

import './whoIAm.scss';

const WhoIAm = () => (
        <div className="whoIAm">
          <Link to="/" className="whoIAm_return">Retour page accueil</Link>
          <h2 className="whoIAm_title">Qui suis-je ?</h2>          
          <div className="whoIAm_section">
            <p className="whoIAm_question">Sport préféré ?</p>
            <p className="whoIAm_answer">Hand-ball, c'est le sport que j'ai préféré pratiquer</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Question</p>
            <p className="whoIAm_answer">Réponse</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Passé, Présent ou futur ?</p>
            <p className="whoIAm_answer">Présent ! Ma devise : Carpe Diem</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Question</p>
            <p className="whoIAm_answer">Réponse</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Jeu de société préféré ?</p>
            <p className="whoIAm_answer">Entre Time's up et Taboo mon coeur balance</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Question</p>
            <p className="whoIAm_answer">Réponse</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Verre à moitié plein ou verre à moitié vide ?</p>
            <p className="whoIAm_answer">A moitié plein !</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Un super pouvoir ?</p>
            <p className="whoIAm_answer">Le don d'ubiquité</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Ce que je déteste par dessus tout</p>
            <p className="whoIAm_answer">L'hypocrisie et l'injustice</p>
          </div>
        </div>
);

export default WhoIAm;