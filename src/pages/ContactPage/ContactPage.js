// Currently does not anything after clicking the submit button, only clears inputs.
// This action should be later filled into the handleSubmit function.
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ContactPage.scss";

export default function ContactPage() {
  const width = window.innerWidth;
  const breakpoint = 768;

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h1 className="header">Contact Us</h1>
      <Form>
        {width > breakpoint ? (
          <Row>
            <Col>
              <Form.Group controlId="formFullName">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name (required)"
                  onChange={handleName}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formSubjectOfEmail">
                <Form.Label>Subject of email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject of email (optional)"
                  onChange={handleSubject}
                />
              </Form.Group>
            </Col>
          </Row>
        ) : (
          <div>
            <Form.Group controlId="formFullName">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name (required)"
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group controlId="formSubjectOfEmail">
              <Form.Label>Subject of email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject of email (optional)"
                onChange={handleSubject}
              />
            </Form.Group>
          </div>
        )}
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email (required)"
            onChange={handleEmail}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="8"
            placeholder="Enter message (required)"
            onChange={handleMessage}
          />
        </Form.Group>
        <div className="button">
          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
