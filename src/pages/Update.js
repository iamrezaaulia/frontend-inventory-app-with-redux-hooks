import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// import axios from 'axios';

import { connect } from 'react-redux';
import { getProductById, updateProduct } from '../redux/actions/ProductsAction';


class Update extends Component {
    state = {
        name: '',
        description:'',
        image:'',
        categories_id: '',
        quantity: ''
    };

    async componentDidMount() {
        const {id} = this.props.match.params
        await this.props.getProductById(id)
        this.setState(this.props.product.products)
        // console.log(this.props.product.products)
    }

    handlerChange = e => {
		this.setState({	[e.target.name] : e.target.value })
        console.log(this.state)
    }

    handlerSubmit = e => {
        e.preventDefault()
        const id = this.props.match.params.id
        const newData = this.state
        this.props.updateProduct(id, newData)
        .then(res => {
            this.props.history.push('/products')
        })
        // .catch(err => alert(err));
    }
    
    //  var token_1 = localStorage.getItem('auth')
    //  headers: {
    //      token: 'bearer ' + token_1
    //  }

    render() {

        const { name, description, image, quantity } = this.state
        console.log(this.state)

        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={4}>
                        <h4 className='text-center mb-4'>Form Update Data Inventory</h4>
                        <Form>
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
                                <Form.Control as="select"
                                            type='text'
                                            name='categories_id'
                                            onChange={this.handlerChange}
                                >
                                    <option value='1'>Komputer</option>
                                    <option value='2'>Handphone</option>
                                    <option value='3'>Pelengkapan Rumah</option>
                                    <option value='4'>Makanan dan Minuman</option>
                                    <option value='5'>Fashion</option>
                                </Form.Control>
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

                            <Button variant='primary' type='submit' onClick={this.handlerSubmit}>Update</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.products
    }
}

const mapDispatchToProps = dispatch => ({
    getProductById: (id) => dispatch(getProductById(id)),
    updateProduct: (id, data) => dispatch(updateProduct(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Update);