import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import WhoIAm from '../WhoIAm';
import Skills from '../Skills';
import Projects from '../Projects';

const Page = () => (
    <div className="page">
        <Switch>
            <Route exact path="/qui_suis_je">
                <WhoIAm />
            </Route>
            <Route exact path="/skills">
                <Skills />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
);

export default Page;