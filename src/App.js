import React from 'react';
import './App.css';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import {routes} from './routes/routes.js';
import {  Route, Switch } from 'react-router-dom';

function App() {  
  return (
    <React.Fragment>
      <Header routes={routes}/>
      <Switch>
        {routes.map((route, index) => (<Route key={index} {...route} />))}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
