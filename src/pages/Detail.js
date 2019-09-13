import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';

import { getProductById, deleteProduct } from '../redux/actions/ProductsAction';

import Product from '../assets/product.png';
// import loading from '../assets/loading.gif';

class Detail extends Component {
    // state = {
    //     loading: true,
    //     products: []
    // }
    
    componentDidMount() {
        this.props.getProductById(this.props.match.params.id)
    }

    // async componentDidMount() {
    //     await axios.get('/products/' + this.props.match.params.id)
    //         .then((res) => this.setState({ products: res.data.data[0], loading: false}))
    //         console.log(this.state);
    // }

    delete = id => {
        this.props.deleteProduct(id)
        .then(res => {
            this.props.history.push('/products')
        })
    }
    // delete = async () => {
    //     var token_1 = localStorage.getItem('auth')
    //     window.event.preventDefault()
    //     await axios.delete('/products/delete/' + this.props.match.params.id, {
    //         headers: {
    //             token: 'bearer ' + token_1
    //           }
    //     })
    // }

    render() {
        const { products } = this.props.product
        
        // if(this.state.loading) {
        //     return  <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
        //                 <Image src={loading} style={{ width: '3rem' }} /> 
        //             </div>
        // }
        
        // localStorage.setItem('ide', this.props.match.params.id)
        // var id_arr = localStorage.getItem('ide')

        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <Card style={{ width: '22rem' }} className='mt-3'>
                            <Card.Img variant='top' src={Product} />
                            <Card.Body>
                                <Card.Title >{products.name}</Card.Title>
                                <Card.Text className='m-0'>Description : {products.description}</Card.Text>
                                <Card.Text className='m-0'>Category : {products.category}</Card.Text>
                                <Card.Text className='mb-4'>Quantity : {products.quantity}</Card.Text>
                                <Link to={'/update/' + this.props.match.params.id }>
                                    <Button variant='primary' className='float-left'>Update</Button>
                                </Link>
                                <Button variant='danger' className='float-right' onClick={this.delete.bind(this, this.props.match.params.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
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
    deleteProduct: (id) => dispatch(deleteProduct(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

