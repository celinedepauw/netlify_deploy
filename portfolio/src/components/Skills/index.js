import React from 'react';
import { Link } from 'react-router-dom';
import { datasHardSkills } from "./dataHardSkills";
import { datasSoftSkills } from "./dataSoftSkills";
import { datasLanguages } from "./languages";

import './skills.scss';

const Skills = () => (
        <div className="skills">
            <Link to="/" className="skills_return">Retour page accueil</Link>
            <h2 className="skills_title">Mes atouts</h2>
            <h3>(en plus de ma bonne humeur)</h3>
            <div className="softSkills">
                <h3 className="softSkills_title">Mon savoir-être </h3>
                <div className="softSkills_list">
                {datasSoftSkills.map((softSkill) =>(
                    <div className="softSkill">
                        <li 
                            key={softSkill.name}
                            className="softSkill_name">{softSkill.name}
                        </li>
                        <img src={softSkill.logo} className="softSkill_logo" />
                    </div>
                ))}
                </div>
            </div>
            <div className="languages">
                <h3 className="languages_title">Mes compétences linguistiques</h3>
                <div className="languages_list">
                {datasLanguages.map((language) =>(
                    <div className="language">
                        <li 
                            key={language.name}
                            className="language_name">{language.name} <span>({language.level})</span>
                        </li>
                        <img src={language.logo} className="language_logo" />
                    </div>
                ))}
                </div>
            </div>
            <div className="hardSkills">
                <h3 className="hardSkills_title">Mes compétences techniques (bonus pour comprendre l'équipe Tech)</h3>
                <div className="hardSkills_list">
                {datasHardSkills.map((hardSkill) =>(
                    <div className="hardSkill">
                        <li
                        key={hardSkill.name}
                        className="hardSkill_name">{hardSkill.name}
                        </li>
                        <img src={hardSkill.logo} className="hardSkill_logo" />
                    </div>
                ))}
                </div>
            </div>
            <div className="potencial">
                <h3 className="potencial_title">Mon potentiel</h3>
                <p className="potencial_text">J'ai réalisé en 2021 un test de personnalité chez Assessfirst, qui vous en apprendra encore plus sur moi ! <a href="https://app.assessfirst.com/_/profile/jrbm08fl-celine-depauw" target="_blank">Cliquez ici pour en savoir plus !</a></p>
            </div>
        </div>
);

// src={`${hardSkill.logo}`}
export default Skills;