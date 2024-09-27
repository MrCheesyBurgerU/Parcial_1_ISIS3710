import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ message }) {
  return (
    <footer style={{marginTop:'50px'}}>
      <Container>
        <p className="text-center">{message}</p>
      </Container>
    </footer>
  );
}

export default Footer;
