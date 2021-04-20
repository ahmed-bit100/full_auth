import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const { loading, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        phoneNumber,
        password,
      })
    );
  };
  return (
    <div>
      {loading ? (
        <h1> Please wait... </h1>
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1>Sign Up</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addUser}>
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
