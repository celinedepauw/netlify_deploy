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
                <h3 className="hardSkills_title">Compétences techniques</h3>
                {datasHardSkills.map((hardSkill) =>(
                    <p
                        key={hardSkill.name}
                        className="hardSkill">{hardSkill.name}</p>
                ))}
            </div>
            <div className="softSkills">
                <h3 className="softSkills_title">Savoir-Etre </h3>
                {datasSoftSkills.map((softSkill) =>(
                    <li 
                    key={softSkill.name}
                    className="softSkill">{softSkill.name}</li>
                ))}
            </div>
        </div>
);

export default Skills;