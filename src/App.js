import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      original: "www.google.com"
    };
  }

  post() {
    const { original } = this.state;
    axios
      .post("http://localhost:3001/api/url/test", { original })
      .then(results => {
        console.log(results);
      });
  }

  componentDidMount() {
    this.post();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
