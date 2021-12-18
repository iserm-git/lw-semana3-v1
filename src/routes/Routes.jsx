import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Users from "../views/Users";
import Form1 from "../views/Form1";

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/form1">
            <Form1 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
