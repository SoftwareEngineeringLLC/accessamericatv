// App.js

import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
// import NavItem from "react-bootstrap/NavItem";
// import { LinkContainer } from "react-router-bootstrap/lib/LinkContainer";

import imgLogo from "./img/metroeast_logo_111x70.png";
import imgPlay from "./img/noun_Play_961762_50x50.png";
import imgExplore from "./img/noun_Explorer_1749805_50x50.png";
import imgLibrary from "./img/noun_Library_2269599_50x50.png";
import imgInfo from "./img/noun_Help_677616.png";
import imgUser from "./img/noun_User_2277771_50x50.png";

import "./css/bootstrap.min.css";

import ColoredLine from "./ColoredLine";
import { defaultState } from "./defaults";
import { initAppState } from "./helpers";

// External component pages
import HomePage from "./Home.js";
import StreamPage from "./Stream.js";
import ExplorePage from "./Explore.js";
import LibraryPage from "./Library.js";
import InfoPage from "./Info.js";
import UserPage from "./User.js";

// this is what controls the universe
var currentState = {};

// This is what makes it go!
const BaseLayout = () => (
  <div className="base">
    <Navbar variant="dark" expand="md">
      <NavbarBrand href="/">
        <Image
          src={imgLogo}
          width="111"
          height="70"
          className="d-inline-block align-top"
          alt="MetroEast"
        />
      </NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse className="justify-content-center" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/Stream">
            <Image src={imgPlay} alt="Stream" />
            <p align="center">Stream</p>
          </NavLink>
          <NavLink href="/Explore">
            <Image src={imgExplore} alt="Explore" />
            <p align="center">Explore</p>
          </NavLink>
          <NavLink href="/Library">
            <Image src={imgLibrary} alt="Library" />
            <p align="center">Library</p>
          </NavLink>
          <NavLink href="/Info">
            <Image src={imgInfo} alt="Info" />
            <p align="center">Info</p>
          </NavLink>
        </Nav>
        <NavLink className="mr" href="/User">
          <Image src={imgUser} alt="User" />
          <p align="center">User</p>
        </NavLink>
      </NavbarCollapse>
    </Navbar>
    <div className="container">
      <Switch>
        <Route
          path="/"
          exact
          render={props => <HomePage {...props} currentState={currentState} />}
        />
        <Route
          path="/Stream"
          render={props => <StreamPage currentState={currentState} />}
        />
        <Route
          path="/Explore"
          render={props => <ExplorePage currentState={currentState} />}
        />
        <Route
          path="/Library"
          render={props => <LibraryPage currentState={currentState} />}
        />
        <Route
          path="/Info"
          render={props => <InfoPage currentState={currentState} />}
        />
        <Route
          path="/User"
          render={props => <UserPage currentState={currentState} />}
        />
        <Route render={props => <HomePage currentState={currentState} />} />
      </Switch>
    </div>
    <footer>
      <ColoredLine color="grey" />
      <p align="center">
        Powered by
        <a
          href="https://metroeast.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          MetroEast Community Media
        </a>{" "}
        and
        <a
          href="https://entermediadb.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          EnterMediaDB
        </a>
        <br />
        <a
          href="https://unlicense.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          This software is in the Public Domain
        </a>
      </p>
    </footer>
  </div>
);

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    // initial blank state
    this.state = defaultState;
    // console.log("App.constructor");
    // console.log(this);
  }

  componentWillMount() {
    // First run update localStorage using defaultState in defaults.js
    currentState = initAppState();
    this.setState(currentState);
    // console.log("App.componentWillMount");
    // console.log(currentState);
  }

  render() {
    return (
      <Router history={history}>
        <BaseLayout />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
