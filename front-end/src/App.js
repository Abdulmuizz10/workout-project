import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {

  return (
    <>
      <Navbar/>
      <div className="content">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;
