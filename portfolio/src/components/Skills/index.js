import React from 'react';
import { Link } from 'react-router-dom';
import { datasHardSkills } from "./dataHardSkills";
import { datasSoftSkills } from "./dataSoftSkills";

import './skills.scss';

const Skills = () => (
        <div className="skills">
            <Link to="/" className="skills_return">Retour page accueil</Link>
            <h2 className="skills_title">Le match : Hard skills vs Soft skills</h2>
            <div className="hardSkills">
                <h3 className="hardSkills_title">Mes compétences techniques</h3>
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
        </div>
);

// src={`${hardSkill.logo}`}
export default Skills;