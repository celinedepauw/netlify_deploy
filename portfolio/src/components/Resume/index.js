import React from 'react';
import { Link } from 'react-router-dom';

import './resume.scss';

const Resume = () => (
        <div className="resume">
            <Link to="/" className="resume_return">Retour page accueil</Link>
            <h2 className="resume_title">Mon CV</h2>
        </div>
);

export default Resume;