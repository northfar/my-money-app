import React from 'react'
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router'

import AuthOrApp from './authOrApp'
import App from './App'
import BillingCycle from '../billingCycle/billingCycle'
import Dashboard  from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycle' component={BillingCycle} />
        </Route>
        <Redirect from ='*' to='/' />
    </Router>
)