import React from 'react';
import { Link } from 'react-router-dom';

const ResumeSmall = () => (
    <div className="resumeSmall">
        <h3 className="resumeSmall_title">Mon CV</h3>
        <p className="resumeSmall_intro">A peu près tout ce que vous venez de voir est récapitulé dans mon CV, sur une seule page biensûr !</p>
        <p className="resumeSmall_link"><Link to="/cv">Voir le CV</Link></p>
    </div>
);

export default ResumeSmall;