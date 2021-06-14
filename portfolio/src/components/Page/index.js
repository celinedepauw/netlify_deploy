import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import WhoIAm from '../WhoIAm';

const Page = () => (
    <div className="page">
        <Switch>
            <Route exact path="/qui_suis_je">
                <WhoIAm />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
);

export default Page;