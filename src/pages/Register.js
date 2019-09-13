import React, { Component } from 'react';
import { Form, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../redux/actions/UsersAction'


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
	};

	handlerChange = e => {
		this.setState({
			[e.target.name] : e.target.value
		});
    }

    handlerSubmit = e => {
        e.preventDefault()
        const data = this.state
        this.props.register(data)
        .then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={4}>
                        <h4 className='text-center mb-4'>Form Register</h4>
                        <Form>
                            <Form.Group className='username'>
                                <Form.Control 
                                            type='text' 
                                            name='username'  
                                            onChange={this.handlerChange} 
                                            placeholder='Enter Username' 
                                />
                            </Form.Group>

                            <Form.Group className='email'>
                                <Form.Control 
                                            type='text'
                                            name='email' 
                                            onChange={this.handlerChange}
                                            placeholder='Enter email' 
                                />
                            </Form.Group>

                            <Form.Group className='formBasicPassword'>
                                <Form.Control 
                                            type='password' 
                                            name='password' 
                                            onChange={this.handlerChange}
                                            placeholder='Password' 
                                />
                            </Form.Group>
                        
                            <Button variant='primary' type='submit'onClick={this.handlerSubmit}>Register</Button>
                            <hr/>
                        </Form>
                        <Link to='/login'>
                            <Badge variant="warning" size='lg'>Have An Account, Login Here</Badge>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    register: (data) => dispatch(register(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);