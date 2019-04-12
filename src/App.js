import React, { Component } from "react";
import "./scss/styles.scss";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/components/Resume/" component={Resume} />
            <Route exact path="/components/Work" component={Work} />
            <Route exact path="/components/Contact" component={Contact} />
          </div>
        </BrowserRouter>
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
