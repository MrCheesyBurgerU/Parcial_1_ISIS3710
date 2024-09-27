import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RobotImage from './images/banner.png';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function Banner() {
    return (
        <Container className='text-center' style={{marginTop:'3vh'}}>
            <h1><strong><FormattedMessage id="titulo"/></strong></h1>
            <Row className='align-items-center'>
                <Col>
                    <hr 
                        style={{width: '67%', margin: '0 auto',border: 'none',height: '2px',backgroundColor: '#000',boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', marginBottom: '1vh'
                        }} 
                    />
                </Col>
            </Row>
            <Image 
                src={RobotImage}
                width={'65%'}
                height={'30%'}
                className="d-block mx-auto"
            />
            <Row className='align-items-center'>
                <Col>
                    <hr 
                        style={{width: '67%', margin: '0 auto',border: 'none',height: '2px',backgroundColor: '#000',boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', marginTop: '1vh'
                        }} 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;

