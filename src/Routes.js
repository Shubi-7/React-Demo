import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Offer from './components/offer/Offer';

export default function Routes() {
    return (
        <div>

        <Router>

        <Switch>

        <Route  exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route  exact path="/offer" component={Offer}/>

        </Switch>

        </Router>
            
        </div>
    )
}
