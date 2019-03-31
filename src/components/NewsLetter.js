import React, { Component } from "react";
import { Col, Row, Form, FormControl, Button } from "react-bootstrap";

export default class NewsLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      email: ""
    });

    alert("Submitted successfuly!");
  };

  render() {
    return (
      <Col xs={12} sm={6} className="form">
        <Row>
          <Col xs={12} className="text-center">
            <img src={require("../assets/img/img.png")} />
          </Col>
          <Col xs={12}>
            <p>
              <h2 className="text-center heading">
                Sign up for our newsletter
              </h2>
            </p>
            <p className="text-center text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs={12}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group>
                <FormControl
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="danger" type="submit">
                  Send
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}
