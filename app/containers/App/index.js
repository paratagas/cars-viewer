/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import DetailsPage from 'containers/DetailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="app--container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details" component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
