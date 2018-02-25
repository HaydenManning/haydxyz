import React, { Component } from "react";

import routes from "./routes";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  componentDidMount() {
    // axios calls to get User Data && Users Short Url's
  }
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
