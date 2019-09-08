import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';


class AddProduct extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        categories_id: '',
        quantity: ''
	};

	handlerChange = e => {
		this.setState({
			[e.target.name] : e.target.value
		});
    }
    
    handlerSubmit = async () => {
        var token_1 = localStorage.getItem('auth')
        window.event.preventDefault()
        await axios.post('/products', this.state, {
            headers: {
                token: 'bearer ' + token_1
              }
        })
        console.log(this.state)
        this.props.history.push('/products')
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={4}>
                        <h4 className='text-center mb-4'>Form Create New Inventory</h4>
                        <Form onSubmit={this.handlerSubmit}>
                            <Form.Group className='name'>
                                <Form.Control 
                                            type='text' 
                                            name='name'  
                                            onChange={this.handlerChange} 
                                            placeholder='Enter Name of Product' 
                                />
                            </Form.Group>

                            <Form.Group className='description'>
                                <Form.Control
                                            as="textarea" rows="3" 
                                            type='text'
                                            name='description' 
                                            onChange={this.handlerChange}
                                            placeholder='Description' 
                                />
                            </Form.Group>

                            <Form.Group className='image'>
                                <Form.Control 
                                            type='text' 
                                            name='image' 
                                            onChange={this.handlerChange}
                                            placeholder='Image{URL}' 
                                />
                            </Form.Group>

                            <Form.Group className='categories_id'>
                                <Form.Control
                                            type='text'
                                            name='categories_id' 
                                            onChange={this.handlerChange}
                                            placeholder='Categories'
                                />
                            </Form.Group>

                            <Form.Group className='quantity'>
                                <Form.Control
                                            type='text'
                                            name='quantity' 
                                            onChange={this.handlerChange}
                                            placeholder='Quantity'
                                />
                            </Form.Group>

                            <Button variant='primary' type='submit'>Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddProduct;