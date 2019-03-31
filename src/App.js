import React, { Component } from "react";
import { NewsLetter } from "./components";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <NewsLetter />
      </Container>
    );
  }
}

export default App;
