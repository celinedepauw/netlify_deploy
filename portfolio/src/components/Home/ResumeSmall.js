import React from 'react';
import { Link } from 'react-router-dom';

import resume from '../../assets/images/resume.svg';
import curriculum from '../../assets/docs/cv.pdf';

const ResumeSmall = () => (
    <div className="resumeSmall">
        <div className="resumeSmall_title">
            <h3 className="resumeSmall_title_text">Mon CV</h3>
            <img src={resume} alt="resume" className="resumeSmall_title_picture" />
        </div>
        <p className="resumeSmall_intro">Si vous êtes adepte du CV, faites-vous plaisir, téléchargez-le.</p>
        <p className="resumeSmall_link"><a href={curriculum} download>Télécharger le CV</a></p>
    </div>
);

export default ResumeSmall;