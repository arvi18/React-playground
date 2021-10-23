import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;