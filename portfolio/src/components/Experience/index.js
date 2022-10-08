import React from 'react';
import { Link } from 'react-router-dom';
import diploma from '../../assets/images/medaille.png';

import './experience.scss';

const Experience = () => (
        <div className="experience">
            <Link to="/" className="experience_return">Retour page accueil</Link>
            <h2 className="experience_title">Mon parcours</h2>
            <div className="experience_section">
                <p className="experience_details">Après 15 ans passés dans le commerce et la distribution, à manager et accompagner des équipes dans la recherche de la performance et de la satisfaction client, j’ai choisi de donner un nouvel élan à ma carrière et de m'orienter vers le monde de l'IT.</p>
                <p className="experience_details"><span>Mais pourquoi ???</span><br/>
                Utilisatrice d'outils de gestion et de sites web / applications mobiles, j'ai eu envie de passer "de l'autre côté". Le but étant de concevoir des solutions digitales adaptées aux besoins, de proposer aux utilisateurs une expérience différenciante, agréable, efficace... bref leur fournir un produit au top !</p>
                <p className="experience_details">J'ai choisi d'y aller par étapes et je me suis dans un premier temps formée au métier de <span>Développeuse Web. </span>Oui, parce que j'aime bien comprendre les choses. En développant des sites web, j'ai compris les contraintes de ce milieu, mais aussi les leviers disponibles pour fournir une UX digne de ce nom aux utilisateurs.</p>
                <p className="experience_details">Aujourd'hui, je suis prête à passer à l'étape supérieure : devenir <span>Product Owner</span>. Ma vision, « Seul on va plus vite, ensemble on va plus loin », colle parfaitement à ce métier, et c'est pour ça que je suis certaine de pouvoir m'éclater dans cette voie !<br/>
                Alors si vous pensez pouvoir m'offrir l'opportunité qui me fera continuer de progresser, discutons-en ! Je suis prête à relever les défis que vous voudrez bien me lancer, et promis, je donnerai le meilleur de moi-même ! Oui, je suis comme ça !</p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Développeuse Web Front-end Angular</p>
                <p className="experience_job">Assistance à la Maîtrise d'Ouvrage</p>
                <p className="experience_duration">Depuis Juillet 2022</p>
                <p className="experience_enterprise">Apside</p>
                <p className="experience_details">
                    <li className="experience_item">Développement de sites web / applications mobiles : Angular - Ionic - RxJS</li>
                    <li className="experience_item">Assistance à la Maîtrise d'Ouvrage : recueil et compréhension des besoins, rédaction des spécifications fonctionnelles, écriture et priorisation des US</li>
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Développeuse Web Front-end Angular</p>
                <p className="experience_duration">9 mois (2021 - 2022)</p>
                <p className="experience_enterprise">Dev-id</p>
                <p className="experience_details">
                    <li className="experience_item">Développement de sites web : Angular - Akita - RxJS</li>
                    <li className="experience_item">Développement d'applications Android : Kotlin</li>
                </p>
            </div>
            <div className="experience_section">
                <img src={diploma} alt="diplome" className="experience_diploma" />
                <p className="experience_job">Titre Professionnel Développeur Web Web Mobile (Bac +2)</p>
                <p className="experience_duration">Formation intensive de 6 mois (2020 - 2021)</p>
                <p className="experience_enterprise">Ecole O'clock</p>
                <p className="experience_details">
                    <li className="experience_item">Bases en HTML - CSS - JS - PHP - MySQL - Gestion de projet (3,5 mois)</li>
                    <li className="experience_item">Spécialisation en React et React-Redux (1 mois)</li>
                    <li className="experience_item">Projet en équipe (1 mois) : développement de A à Z du projet O'rando <Link to="/projet_Orando" className="experience_link_orando">(voir le projet)</Link></li>
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
                <p className="experience_job">Diplôme d'Ingénieur en Sciences et Technologies des Industries Alimentaires</p>
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