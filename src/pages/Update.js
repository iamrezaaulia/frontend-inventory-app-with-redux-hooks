import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';


class Update extends Component {
    state = {
        name: '',
        description:'',
        image:'',
        categories_id: '',
        quantity: ''
    };
    
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await axios.get('/products/' + id)
        console.log(res)

        this.setState({
            name: res.data.data[0].name,
            description: res.data.data[0].description,
            image: res.data.data[0].image,
            categories_id: res.data.data[0].categories_id,
            quantity: res.data.data[0].quantity
        })
    }

	handlerChange = e => {
		this.setState({
			[e.target.name] : e.target.value
        });
        console.log(this.state)
    }
    
    handlerSubmit = async () => {
        var token_1 = localStorage.getItem('auth')
        window.event.preventDefault()
        await axios.put('/products/update/' + this.props.match.params.id, this.state, {
            headers: {
              token: 'bearer ' + token_1
            }
           })
        console.log(this.state)
        this.props.history.push('/products')
        // console.log(token)
        // console.log(auth)
        // redirect to
    }

    render() {

        const { name, description, image, categories_id, quantity } = this.state
        console.log(this.state)

        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={4}>
                        <h4 className='text-center mb-4'>Form Update Data Inventory</h4>
                        <Form onSubmit={this.handlerSubmit}>
                            <Form.Group className='name'>
                                <Form.Control 
                                            type='text' 
                                            name='name'
                                            value={name}  
                                            onChange={this.handlerChange} 
                                            placeholder='Name' 
                                />
                            </Form.Group>

                            <Form.Group className='description'>
                                <Form.Control 
                                            type='text' 
                                            name='description'
                                            value={description}  
                                            onChange={this.handlerChange} 
                                            placeholder='Description'
                                />
                            </Form.Group>

                            <Form.Group className='name'>
                                <Form.Control 
                                            type='text' 
                                            name='image'
                                            value={image}  
                                            onChange={this.handlerChange} 
                                            placeholder='Image' 
                                />
                            </Form.Group>

                            <Form.Group className='categories_id'>
                                <Form.Control
                                            type='text'
                                            name='categories_id'
                                            value={categories_id} 
                                            onChange={this.handlerChange}
                                            placeholder='Categories'
                                />
                            </Form.Group>

                            <Form.Group className='quantity'>
                                <Form.Control
                                            type='text'
                                            name='quantity'
                                            value={quantity} 
                                            onChange={this.handlerChange}
                                            placeholder='Quantity'
                                />
                            </Form.Group>

                            <Button variant='primary' type='submit'>Update</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Update;