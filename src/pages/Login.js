import React, { Component } from 'react';
import { Form, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Login extends Component {
    state = {
        username: '',
        email: '',
        token: ''
	};

	handlerChange = e => {
		this.setState({
			[e.target.name] : e.target.value
		});
    }
    
    handlerSubmit = async () => {
        window.event.preventDefault()
        await axios.post('/user/login', this.state)
        .then(res => this.setState({
            token: res.data.token
        }))
        console.log(this.state)

        localStorage.setItem('auth', this.state.token)
        window.location.replace('/products')
    }

    render() {
        return (
            <Container>
                <Row className='justify-content-md-center mt-5' >
                    <Col md={4}>
                        <h4 className='text-center mb-4'>Form Login</h4>
                        <Form onSubmit={this.handlerSubmit}>
                            <Form.Group className='email'>
                                <Form.Control 
                                            type='text'
                                            name='email' 
                                            onChange={this.handlerChange}
                                            placeholder='Enter email' 
                                />
                            </Form.Group>

                            <Form.Group className='password'>
                                <Form.Control 
                                            type='password' 
                                            name='password' 
                                            onChange={this.handlerChange}
                                            placeholder='Password' 
                                />
                            </Form.Group>
                        
                            <Button variant='primary' type='submit'>Login</Button>
                            <hr/>
                        </Form>
                        <Link to='/register'>
                            <Badge variant="warning" size='lg'>Dont' Have An Account, Register Here</Badge>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;