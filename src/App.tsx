import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { ThemeContext } from './contexts/theme.context';

import Header from './pages/header/header.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import NotFound from './pages/notFound/notfound.component';

function App() {
  const { theme } = useContext(ThemeContext);
  const themeStyle: string = theme !== 'light' ? 'dark' : 'light';

  return (
    <div className={`App ${themeStyle}`}>
      <Header/>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
