import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import WhoIAm from '../WhoIAm';
import Skills from '../Skills';
import Projects from '../Projects';
import Resume from '../Resume';


const Page = () => (
    <div className="page">
        <Switch>
            <Route exact path="/qui_suis_je">
                <WhoIAm />
            </Route>
            <Route exact path="/competences">
                <Skills />
            </Route>
            <Route exact path="/projets">
                <Projects />
            </Route>
            <Route exact path="/cv">
                <Resume />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
);

export default Page;