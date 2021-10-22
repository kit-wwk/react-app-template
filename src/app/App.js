import React, { Component, Suspense } from "react";
import { BrowserRouter } from 'react-router-dom'
import { Routes } from "./routing/Routes";
import SplashScreen from "./modules/SplashScreen";
import PropTypes from 'prop-types';

const App = ({ basename }) => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter basename={basename}>
          <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

App.defaultProps = {
  basename: ""
}

App.propTypes = {
  basename: PropTypes.string
}

export default App;