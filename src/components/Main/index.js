import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meals from '../../containers/Meals';
import SingleMeal from '../../containers/SingleMeal'

const Main = props => {
    return (
    <Switch>
        <Route exact path="/" component={Meals}></Route>
        <Route path="/meals/:id" component={SingleMeal}></Route>
    </Switch>
    )
}


export default Main;