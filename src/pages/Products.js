import React, { Component } from 'react';
import { Card, Button, Container, Image, Row, Col, Dropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../redux/actions/ProductsAction';

import Product from '../assets/product.png';
import loading from '../assets/loading.gif';

class Products extends Component {
    state = {
        search: '%%',
        sortBy: 'name',
        sort: 'desc',
        limit: '8',
        page: '1'
    }
 
    componentDidMount() {
        this.props.getProducts(this.state)
    }

    sendQuery = async () => {
		await this.setState();
		this.componentDidMount();
	} 

    handlerChange = e => {
        this.setState({ [e.target.id]: e.target.textContent });
        this.sendQuery();
    }

    handlerChangeSearch = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.sendQuery();
    }

    render() {
        const { isLoading, products } = this.props.products
        console.log(this.props.products)
        return (
            <Container>
                <Row className='d-flex flex-column'>
                    <Col>
                        <Link to='/create'>
                            <Button variant='warning' size='sm' className='float-right mt-4'>Add Product</Button>
                        </Link>
                        <Dropdown>
                            <Dropdown.Toggle variant='primary' id='dropdown-basic' className='float-left mt-4' size='sm'>
                                Sort
                            </Dropdown.Toggle>
                            <Dropdown.Menu size='sm'>
                                <Dropdown.Item id='sort' size='sm' onClick={this.handlerChange}>ASC</Dropdown.Item>
                                <Dropdown.Item id='sort' size='sm' onClick={this.handlerChange}>DESC</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant='primary' id='dropdown-basic' className='float-left mt-4 ml-3' size='sm'>
                                SortBy
                            </Dropdown.Toggle>
                            <Dropdown.Menu size='sm'>
                                <Dropdown.Item id='sortBy' size='sm' onClick={this.handlerChange}>Name</Dropdown.Item>
                                <Dropdown.Item id='sortBy' size='sm' onClick={this.handlerChange}>Category</Dropdown.Item>
                                <Dropdown.Item id='sortBy' size='sm' onClick={this.handlerChange}>Quantity</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant='primary' id='dropdown-basic' className='float-left mt-4 ml-3' size='sm'>
                                Limit
                            </Dropdown.Toggle>
                            <Dropdown.Menu size='sm'>
                                <Dropdown.Item id='limit' onClick={this.handlerChange}>2</Dropdown.Item>
                                <Dropdown.Item id='limit' onClick={this.handlerChange}>4</Dropdown.Item>
                                <Dropdown.Item id='limit' onClick={this.handlerChange}>8</Dropdown.Item>
                                <Dropdown.Item id='limit' onClick={this.handlerChange}>12</Dropdown.Item>
                                <Dropdown.Item id='limit' onClick={this.handlerChange}>16</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant='primary' id='dropdown-basic' className='float-left mt-4 ml-3' size='sm'>
                                Page
                            </Dropdown.Toggle>
                            <Dropdown.Menu size='sm'>
                                <Dropdown.Item id='page' onClick={this.handlerChange} >1</Dropdown.Item>
                                <Dropdown.Item id='page' onClick={this.handlerChange}>2</Dropdown.Item>
                                <Dropdown.Item id='page' onClick={this.handlerChange}>3</Dropdown.Item>
                                <Dropdown.Item id='page' onClick={this.handlerChange}>4</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form inline>
                            <FormControl name='search' type='text' placeholder='Search' size='sm' className='float-left mt-4 ml-3'onChange={this.handlerChangeSearch}/>
                        </Form>
                    </Col> 
                </Row>
                <Row>
                    { (!isLoading && products.length > 0) ? (
                        this.props.products.products.map( product =>
                            <Col md={3} className='justify-content-md-center'>
                                <Card style={{ width: '16rem' }} className='mt-4'>
                                    <Card.Img variant='top' src={Product} />
                                    <Card.Body>
                                        <Card.Title >{product.name}</Card.Title>
                                        <Card.Text className='m-0'>Category  : {product.category}</Card.Text>
                                        <Card.Text className='mb-4'>Quantity : {product.quantity}</Card.Text>
                                        <Link to={'/detail/' + product.id}>
                                            <Button variant='primary' size='sm'>Detail</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : (
                        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                            <Image src={loading} style={{ width: '3rem' }} /> 
                        </div>) 
                    }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => ({
    getProducts: (query) => dispatch(getProducts(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);