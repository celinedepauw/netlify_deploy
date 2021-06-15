import React from 'react';
import Introduction from './Introduction';
import ExperienceSmall from './ExperienceSmall';
import SkillsSmall from './SkillsSmall';
import WhoIAmSmall from './WhoIAmSmall';
import ProjectsSmall from './ProjectsSmall';
import ResumeSmall from './ResumeSmall';

import './home.scss';

const Home = () => (
        <div className="home">
            <Introduction />
            <ExperienceSmall />
            <SkillsSmall />
            <WhoIAmSmall />
            <ProjectsSmall />
            <ResumeSmall />
        </div>
);

export default Home;