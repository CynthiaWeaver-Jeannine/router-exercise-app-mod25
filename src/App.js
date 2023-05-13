import React from "react";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}

function App() {  
  return (
   <Router>
    <div className="App">
      <div>
        <link to="/">Home</link>
      </div>
      {Array(10)
      .fill()
      .map((ignoredValue, index) => index +1)
      .map((id) => (
        <div key={id}>
          <link to={`/user/${id}`}>User {id}</link>
        </div>
      ))}
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
    </Switch>
    </div>
   </Router>
  );
}

export default App;
