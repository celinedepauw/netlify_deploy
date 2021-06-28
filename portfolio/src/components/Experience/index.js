import React from 'react';
import { Link } from 'react-router-dom';
import diploma from '../../assets/images/medaille.png';

import './experience.scss';

const Experience = () => (
        <div className="experience">
            <Link to="/" className="experience_return">Retour page accueil</Link>
            <h2 className="experience_title">Mon parcours</h2>
            <div className="experience_section">
                <p className="experience_details">Après avoir travaillé pendant 15 ans dans le commerce en tant que manager et responsable de magasin, j'ai choisi de me lancer un nouveau challenge : celui de devenir Développeuse Web !</p>
                <p className="experience_details">Aujourd'hui, je cherche une entreprise qui m'offrira l'opportunité de continuer d'apprendre ce métier aux multiples possibilités. Je suis prête à relever les défis que l'on voudra bien me lancer, et promis, je donnerai le meilleur de moi-même !</p>
            </div>
            <div className="experience_section">
                <img src={diploma} alt="diplome" className="experience_diploma" />
                <p className="experience_job">Titre Professionnel Développeur Web Web Mobile (Bac +2)</p>
                <p className="experience_duration">Formation intensive de 6 mois (2020 - 2021)</p>
                <p className="experience_enterprise">Ecole O'clock</p>
                <p className="experience_details">
                    <li className="experience_item">Bases en HTML - CSS - JS - PHP - MySQL - Gestion de projet (3,5 mois)</li>
                    <li className="experience_item">Spécialisation en React et React-Redux (1 mois)</li>
                    <li className="experience_item">Projet en équipe (1 mois) : développement de A à Z du projet O'rando <Link to="/projets" className="experience_link_orando">(voir le projet)</Link></li>
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Directrice de magasin</p>
                <p className="experience_duration">6 ans (2014 - 2020)</p>
                <p className="experience_enterprise">Grand Vision</p>
                <p className="experience_details">
                    <li className="experience_item">Développement du chiffre d'affaires</li>
                    <li className="experience_item">Accompagnement d'une équipe de 10 personnes</li>
                    <li className="experience_item">Analyse de la performance</li>
                    <li className="experience_item">Pilotage de la satisfaction client</li>  
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Responsable de marché</p>
                <p className="experience_duration">3 ans (2011 - 2014)</p>
                <p className="experience_enterprise">Sephora</p>
                <p className="experience_details">
                    <li className="experience_item">Animation d'une équipe de 20 personnes</li>
                    <li className="experience_item">Gestion des flux financiers</li>
                    <li className="experience_item">Gestion de l'audit</li>
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Chef de rayon</p>
                <p className="experience_duration">6 ans (2005 - 2011)</p>
                <p className="experience_enterprise">Auchan</p>
                <p className="experience_details">
                    <li className="experience_item">Gestion d'un compte d'exploitation</li>
                    <li className="experience_item">Gestion d'une équipe de 15 personnes</li>
                    <li className="experience_item">Négociation fournisseurs</li>
                    <li className="experience_item">Gestion d'inventaires</li>
                </p>
            </div>  
            <div className="experience_section">
            <img src={diploma} alt="diplome" className="experience_diploma" />
                <p className="experience_job">Diplôme d'Ingénieur en sciences et technologies des industries alimentaires</p>
                <p className="experience_duration">3 ans (2002 - 2005)</p>
                <p className="experience_enterprise">Polytech Montpellier</p>
                <p className="experience_details">
                    <li className="experience_item">2005 : Stage Optimisation d'une ligne de production - Ricard (6 mois)</li>
                    <li className="experience_item">2005 : Stage Mise en place d'un logiciel de Gestion de Production Assistée par Ordinateur - IES (1 mois)</li>
                    <li className="experience_item">2004 : Stage Optimisation d'une ligne de fabrication - Nougats Bremond (2 mois)</li>
                </p>
            </div>                 
        </div>
);

export default Experience;