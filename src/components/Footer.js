import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ message }) {
    return (
        <footer style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px 0', 
            zIndex: 1000 
        }}>
            <Container>
                <p className="text-center">{message}</p>
            </Container>
        </footer>
    );
}

export default Footer;
