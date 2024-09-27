import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';


function Forms() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const restart = () => {
    setPassword('')
    setUsername('')
    setError(false)
    setErrorMessage('')
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: username,
          password: password,
        }),
      });
      
      const data = await response.json();

      if (response.status === 200) {
        setError(false);
        navigate('/list');        
      } else if (response.status === 401) {
        setError(true);
        setErrorMessage(data.message);
      }
    } catch (err) {
      setError(true);
      setErrorMessage('Error en el servidor. Inténtelo más tarde.');
      console.error('Error:', err);
    }
  };

  return (
    <Col lg={4} className="mx-auto">
      <h1>Inicio de Sesión</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><strong>Nombre de usuario</strong></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><strong>Contraseña</strong></Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && (
          <Alert variant="danger">
            {errorMessage}
          </Alert>
        )}

        <Row>
          <Col className="d-flex justify-content-between">
            <Button variant="primary" type="submit" style={{ width: '45%' }}>
              Ingresar
            </Button>
            <Button variant="danger" type="button" style={{ width: '45%' }} onClick={restart}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default Forms;
