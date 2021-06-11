import React from 'react';
import Introduction from './Introduction';
import WhoIAmSmall from './WhoIAmSmall';
import SkillsSmall from './SkillsSmall';
import ProjectsSmall from './ProjectsSmall';
import Resume from './Resume';

import './home.scss';

const Home = () => (
        <div className="home">
            <Introduction />
            <WhoIAmSmall />
            <SkillsSmall />
            <ProjectsSmall />
            <Resume />
        </div>
);

export default Home;