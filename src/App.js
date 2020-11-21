import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Blog from "./views/Blog";
import CreatePost from "./views/CreatePost";
import SinglePost from "./views/SinglePost";
import React from "react";
import Header from "./components/header/index";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
              <Route path='/post/:id'>
                  <SinglePost/>
              </Route>
              <Route path='/create-post'>
                  <CreatePost/>
              </Route>
              <Route path='/'>
                  <Blog/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
