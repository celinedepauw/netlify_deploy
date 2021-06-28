import React from 'react';
import { Link } from 'react-router-dom';

import resume from '../../assets/images/resume.svg';

const ResumeSmall = () => (
    <div className="resumeSmall">
        <div className="resumeSmall_title">
            <h3 className="resumeSmall_title_text">Mon CV</h3>
            <img src={resume} alt="resume" className="resumeSmall_title_picture" />
        </div>
        <p className="resumeSmall_intro">Si vous êtes adepte du CV, faites-vous plaisir, il est disponible en ligne.</p>
        <p className="resumeSmall_link"><a href="https://www.canva.com/design/DAEXtkdLzpI/V9oH1MMyO2PCxNRszpi3tA/view?utm_content=DAEXtkdLzpI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" >Consulter le CV</a></p>
    </div>
);

export default ResumeSmall;