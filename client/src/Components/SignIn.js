import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { loading } = useSelector((state) => state);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return localStorage.getItem("token") ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1>Please wait...</h1>
  ) : (
    <div>
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginUser}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
