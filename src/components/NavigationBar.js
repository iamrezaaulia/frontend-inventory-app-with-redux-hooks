import React, { Component } from 'react';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/Arka.png';

class NavigationBar extends Component {

    logout() {
        localStorage.clear();
		window.location.replace('/')
    }

    render() {
        return (
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand><Link to='/'><Image src={logo}/></Link></Navbar.Brand>
                    <Nav className='mr-auto'>
                        <Nav.Link><Link to='/products'><Button size='sm' variant='warning'>Products</Button></Link></Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>  
                        {
                            localStorage.getItem('auth') ? (
                            <Nav.Link><Button variant='danger'size='sm' onClick={this.logout}>Logout</Button></Nav.Link>
                            ) : 
                            (<Nav.Link><Link to='/login'><Button size='sm' variant='primary'>Login</Button></Link></Nav.Link>
                            )}                  
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;
