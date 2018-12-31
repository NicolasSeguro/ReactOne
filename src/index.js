import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Link, Route, Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Login/Login';
import Menu from './Layout/Menu';
import PerfilPage from './Pages/PerfilPage/PerfilPage';

ReactDOM.render(<BrowserRouter>
            <div>
                <Route  component={Menu} />   
                <Route path='/' exact component={HomePage} />
                <Route path='/login/' exact component={LoginPage} />
                <Route path='/perfil/:id' exact component={PerfilPage} />
            </div>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();