import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Experience from '../Experience';
import Skills from '../Skills';
import WhoIAm from '../WhoIAm';
import Projects from '../Projects';
import Movies from '../Movies';
import Orando from '../Orando';
import Resume from '../Resume';
import Error from '../Error';


const Page = () => (
    <div className="page">
        <Switch>
            <Route exact path="/parcours">
                <Experience />
            </Route>
            <Route exact path="/competences">
                <Skills />
            </Route>
            <Route exact path="/qui_suis_je">
                <WhoIAm />
            </Route>
            <Route exact path="/projets">
                <Projects />
            </Route>
            <Route exact path="/projet_Orando">
                <Orando />
            </Route>
            <Route exact path="/projet_Movies">
                <Movies />
            </Route>
            <Route exact path="/cv">
                <Resume />
            </Route>        
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <Error />
            </Route>
        </Switch>
    </div>
);

export default Page;