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
                        <Nav.Link><Link to='/products'>PRODUCTS</Link></Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>  
                        {localStorage.getItem('auth') ? (
                        <Nav.Link onClick={this.logout}><Button size='sm' variant='danger'>Logout</Button></Nav.Link>
                        ) : (
                        <Nav.Link><Link to='/login'><Button size='sm' variant='danger'>Login</Button></Link></Nav.Link>
                        )}                  
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;
