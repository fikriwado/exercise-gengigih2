import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Search from './pages/Search';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/trending">
                        <Trending />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
