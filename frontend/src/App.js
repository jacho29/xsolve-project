import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Contacts from './Contacts.js';
import LoremIpsum from './LoremIpsum.js';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">XSOLVE</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/loremIpsum">Lorem Ipsum</Link></li>
                        </ul>
                    </div>
                </nav>

                <Route path="/contacts" component={Contacts} />
                <Route path="/loremIpsum" component={LoremIpsum} />
            </div>
            </Router>

        );
    }
}

export default App;