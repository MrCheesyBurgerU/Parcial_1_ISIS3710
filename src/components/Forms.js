import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

function Forms() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const restart = () => {
        setPassword('');
        setUsername('');
        setError(false);
        setErrorMessage('');
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
            if (response.status === 200) {
                setError(false);
                navigate('/list');        
            } 
            else if (response.status === 401) {
                setError(true);
                setErrorMessage(<FormattedMessage id="error"/>);
            }
        } 
        catch (err) {
            setError(true);
            setErrorMessage('Error en el servidor. Inténtelo más tarde.');
            console.error('Error:', err);
        }
    };

    return (
        <Container style={{marginTop:'3vh'}}>
            <Col lg={4} className="mx-auto">
                <h1 className="text-center"><FormattedMessage id="inicio"/></h1>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom:'3vh'}}>
                        <Form.Label><strong><FormattedMessage id="usuario"/></strong></Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                borderColor: error ? 'red' : '',
                                backgroundColor: error ? '#f8f9fa' : '', 
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong><FormattedMessage id="contraseña"/></strong></Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                borderColor: error ? 'red' : '',
                                backgroundColor: error ? '#f8f9fa' : '', 
                            }}
                        />
                    </Form.Group>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <Button variant="primary" type="submit" style={{ width: '45%', borderRadius:'0' }}>
                                <strong><FormattedMessage id="ingresar"/></strong>
                            </Button>
                            <Button variant="danger" type="button" style={{ width: '45%', color:'#000000', borderRadius:'0' }} onClick={restart}>
                                <strong><FormattedMessage id="cancelar"/></strong>
                            </Button>
                        </Col>
                    </Row>
                    {error && (
                        <Form.Group className="mb-3">
                            <br></br>
                            <Form.Label className="text-danger"><strong>{errorMessage}</strong></Form.Label>
                        </Form.Group>
                    )}
                </Form>
            </Col>
        </Container>
    );
}

export default Forms;
