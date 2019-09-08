// import React from 'react';
import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Welcome from '../assets/welcome.png';

const Home = () => {
    return (
        <Container>
            <h4 className='text-center mt-5'>Welcome To Inventory App</h4>   
            <Row className='text-center'>
                <Col>
                    <Image src={Welcome} style={{ width: '40rem' }} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;