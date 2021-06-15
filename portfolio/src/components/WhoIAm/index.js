import React from 'react';
import { Link } from 'react-router-dom';

import './whoIAm.scss';

const WhoIAm = () => (
        <div className="whoIAm">
          <Link to="/" className="whoIAm_return">Retour page accueil</Link>
          <h2 className="whoIAm_title">Qui suis-je ?</h2>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Je faisais quoi avant ?</p>
            <p className="whoIAm_answer">Responsable de magasin - Manager pendant 15 ans. Mais ça, c'était avant !</p>
          </div>          
          <div className="whoIAm_section">
            <p className="whoIAm_question">Pourquoi avoir changé de métier ?</p>
            <p className="whoIAm_answer">Je m'ennuyais dans mon travail, j'avais besoin de plus de stimulation. J'ai choisi ce métier pour améliorer le quotidien des utilisateurs de logiciels dans le cadre de leur travail, et celui des utilisateurs de sites web.</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Mon sport préféré ?</p>
            <p className="whoIAm_answer">Le hand-ball, c'est le sport que j'ai préféré pratiquer (pendant 7 ans), au poste d'ailier droit. Oui, j'aimais bien attaquer et marquer des buts !</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Un jeu de société préféré ?</p>
            <p className="whoIAm_answer">Plutôt les jeux d'ambiance : entre Time's up et Taboo mon coeur balance !</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Tranquille à la maison ou en vadrouille ?</p>
            <p className="whoIAm_answer">J'aime sortir me balader, découvrir de nouvelles activités, et j'adore voyager.</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Si j'avais un super pouvoir ?</p>
            <p className="whoIAm_answer">Le don d'ubiquité pour continuer de découvrir le monde !</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Passé, Présent ou futur ?</p>
            <p className="whoIAm_answer">Présent ! Ma devise : Carpe Diem.</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Verre à moitié plein ou verre à moitié vide ?</p>
            <p className="whoIAm_answer">A moitié plein ! Je m'efforce de toujours voir la vie du bon côté.</p>
          </div>
          <div className="whoIAm_section">
            <p className="whoIAm_question">Ce que je déteste par dessus tout ?</p>
            <p className="whoIAm_answer">L'hypocrisie et l'injustice.</p>
          </div>
        </div>
);

export default WhoIAm;