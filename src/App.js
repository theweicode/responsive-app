import React, { Component } from "react";
import "./scss/styles.scss";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    let body = (
      <div>
        <BrowserRouter>
          <div className="container">
            {/* <Route path="/" component={Header} /> */}
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/components/Resume" component={Resume} />
          </div>
        </BrowserRouter>{" "}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header" />

        <div className="App-body-container">
          <div className="App-body">{body}</div>
        </div>
      </div>
    );
  }
}

export default App;
