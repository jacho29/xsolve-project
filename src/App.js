import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Contacts from './Contacts.js';
import Contact from './Contact.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/contact/:id" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default App;