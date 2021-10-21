import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieForm from './components/MovieForm';

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

   let routes = (
      <BrowserRouter>
      <Switch>
        <Route exact path = "/movies/new"> 
          <MovieForm/>
      </Route>
      </Switch>
      </BrowserRouter>
   )
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
