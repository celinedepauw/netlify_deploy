import React from 'react';
import { Link } from 'react-router-dom';

import './skills.scss';

const Skills = () => (
        <div className="skills">
            <Link to="/" className="skills_return">Retour page accueil</Link>
            <h2 className="skills_title">Le match : Hard skills vs Soft skills</h2>
            <div className="skills_hardSkills">
                <h3 className="skills_hardSkills_title">Compétences techniques</h3>
                <div className="skills_hardSkills_logos">
                    <div className="skills_hardSkills_one">HTML5</div>
                    <div className="skills_hardSkills_one">CSS3</div>
                    <div className="skills_hardSkills_one">JS</div>
                    <div className="skills_hardSkills_one">React</div>
                    <div className="skills_hardSkills_one">Redux</div>
                    <div className="skills_hardSkills_one">Sass</div>
                    <div className="skills_hardSkills_one">Bootstrap</div>
                    <div className="skills_hardSkills_one">PHP</div>
                    <div className="skills_hardSkills_one">MySQL</div>
                </div>
            </div>
            <div className="skills_softSkills">
                <h3 className="skills_softSkills_title">Savoir-Etre </h3>
                <div className="skills_softSkills_logos">
                    <div className="skills_softSkills_one">Travail d'équipe</div>
                    <div className="skills_softSkills_one">Adaptabilité</div>
                    <div className="skills_softSkills_one">Curiosité</div>
                    <div className="skills_softSkills_one">Réactivité</div>
                    <div className="skills_softSkills_one">Autonomie</div>
                    <div className="skills_softSkills_one">Gestion des priorités</div>
                    <div className="skills_softSkills_one">Management</div>
                </div>
            </div>
        </div>
);

export default Skills;