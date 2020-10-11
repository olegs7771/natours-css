import React, { Component } from "react";
import logo from "../../img/logo-white.png";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-box">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
