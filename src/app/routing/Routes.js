import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'
import { HomePage } from '../pages/HomePage'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/error' component={ErrorPage} />
        </Switch>
    )
}

export { Routes }
