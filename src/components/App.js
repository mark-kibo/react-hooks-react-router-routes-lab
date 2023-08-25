import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}
  <NavBar />

     
<Route to="/actors">
<Actors/>
</Route>
  <Route to="/directors">
<Directors/>
</Route>
    <Route to="/movies">
  <Movies/>
  </Route>
 
<Route to="/">
  <Home/>
  </Route>

  
  </div>;
}

export default App;
