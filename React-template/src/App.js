import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
// automates reload

const App=()=>(
    <div className="App">
        <h1>Namaste js</h1>
    </div>
)

export default hot(module)(App);