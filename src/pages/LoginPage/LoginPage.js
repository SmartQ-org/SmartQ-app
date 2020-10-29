import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LoginPage.scss";
import fire from "../../firebase";
import checkmark from "../../assets/checkmark.png";

export default function LoginPage() {
  let history = useHistory();

  const [loginEmail, setLoginEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    authListener();
  }, []);

  const handleLoginEmail = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleSignUpEmail = (event) => {
    setSignUpEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    await clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(loginEmail, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            setEmailError(err.message);
        }
        console.log(err.code, err.message);
      });
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/hidden-content");
      }
    });
  };

  const redirectCreateAccount = () => {
    history.push("/sign-up", { email: signUpEmail });
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1>Login</h1>
        <hr />
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleLoginEmail}
            />
          </Form.Group>
          <p style={{ color: "red" }}>{emailError}</p>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <p style={{ color: "red" }}>{passwordError}</p>
          <div className="button">
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </div>
      <div className="create-account-container">
        <h1>New to SmartQ?</h1>
        <hr />
        <p>
          You track your in-store customer capacity, manage your queue lines
          virtually, schedule customers check-in times, and more!
        </p>
        <div className="bullet-point">
          <img src={checkmark} alt="Check mark" className="checkmark" />
          <p> Eliminate the need to monitor your total customer count </p>
        </div>
        <div className="bullet-point">
          <img src={checkmark} alt="Check mark" className="checkmark" />
          <p> Get rid of long waiting lines </p>
        </div>
        <div className="bullet-point">
          <img src={checkmark} alt="Check mark" className="checkmark" />
          <p> Join SmartQ and numerous companies to create virtual queues </p>
        </div>
        <Form className="email-input">
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleSignUpEmail}
            />
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            variant="primary"
            type="submit"
            onClick={redirectCreateAccount}
          >
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
}
