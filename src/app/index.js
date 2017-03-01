import React from 'react';
import {render} from 'react-dom';

import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Mirror } from './components/Mirror';
import { Signup } from './components/Signup';
import { Footer } from './components/Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <Header />
                <Mirror />
                <Signup />
                <Footer />
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
