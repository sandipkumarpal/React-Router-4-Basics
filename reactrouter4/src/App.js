import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/teachers" component={Teachers} />
                    <Route path="/courses" component={Courses} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
