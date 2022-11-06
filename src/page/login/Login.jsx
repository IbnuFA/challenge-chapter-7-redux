import React, { useState, UseNavigate } from "react";
import axios from "axios";

import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../style/landingPage.css"
import { useNavigate } from "react-router-dom";
// import GoogleLogin from "../components/GoogleLogin";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`,
          data
        );
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <header className="header-bg">
        <Card className="col-md-8 col-sm-11">
            <Card.Body>
                <Row>
                    <Col>
                    {!token ? (
                        <>
                        <Nav className="">
                          <Navbar.Brand className="mb-3"><h4>Log in to your Account</h4></Navbar.Brand>
                        </Nav>
                        {/* <GoogleLogin setToken={setToken} label="Login with Google" /> */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            </Form.Group>

                            <Button variant="danger"  type="submit">
                                Login
                            </Button>
                        </Form>
                        </>
                    ) : (
                        navigate(`/posts`)
                    )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      </header>
    </div>
  );
};

export default Login;
