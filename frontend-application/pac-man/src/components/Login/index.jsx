import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.scss';
import { i18n, getTranslation } from '../../locale.ts';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [translations, setTranslations] = useState({});

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      localStorage.setItem("loggedIn",true);
    } else {
      alert('Invalid username or password');
    }
  };

  useEffect(() => {
    getTranslation(i18n.default).then(dict => setTranslations(t => dict));
}, []);

  if (loggedIn) {
    return navigate("/Dashboard");
  }

  

  return (
    <Container className="Login">
      <div className="login-container">
        <h2>{translations.home?.login}</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>{translations.login?.username}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>{translations.login?.password}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br></br>

          <Button variant="primary" onClick={handleLogin}>
            {translations.home?.login}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
