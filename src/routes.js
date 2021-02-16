import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/home';
import Results from './results/results';


function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/:pokemonName" component={Results}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Routes;