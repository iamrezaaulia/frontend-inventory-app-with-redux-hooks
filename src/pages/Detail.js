import React, { Component } from 'react';
import { Card, Button, Container, Image, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Product from '../assets/product.png';
import loading from '../assets/loading.gif';

class Products extends Component {
    state = {
        loading: true,
        products: []
    }
 
    async componentDidMount() {
        await axios.get('/products/' + this.props.match.params.id)
            .then((res) => this.setState({ products: res.data.data[0], loading: false}))
            console.log(this.state);
    }

    delete = async () => {
        var token_1 = localStorage.getItem('auth')
        window.event.preventDefault()
        await axios.delete('/products/delete/' + this.props.match.params.id, {
            headers: {
                token: 'bearer ' + token_1
              }
        })
        console.log('Deleted')
        this.props.history.push('/products')
    }

    render() {
        if(this.state.loading) {
            return  <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                        <Image src={loading} style={{ width: '3rem' }} /> 
                    </div>
        }
        
        const { name, description ,category, quantity } = this.state.products
        
        localStorage.setItem('ide', this.props.match.params.id)
        var id_arr = localStorage.getItem('ide')

        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <Card style={{ width: '22rem' }} className='mt-3'>
                            <Card.Img variant='top' src={Product} />
                            <Card.Body>
                                <Card.Title >{name}</Card.Title>
                                <Card.Text className='m-0'>Description  : {description}</Card.Text>
                                <Card.Text className='m-0'>Category  : {category}</Card.Text>
                                <Card.Text className='mb-4'>Quantity : {quantity}</Card.Text>
                                <Link to={'/update/' + id_arr }>
                                    <Button variant='primary' className='float-left'>Update</Button>
                                </Link>
                                <Button variant='danger' className='float-right' onClick={this.delete}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Products;

