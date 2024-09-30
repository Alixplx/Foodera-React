import React from "react";
import './Navs.css'
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from './../../assets/logo.png'

const Navs = () => {

    return(

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#foods">Explore Foods</Nav.Link>
                    <Nav.Link href="#review">Reviews</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>

                <Nav>

                    <Nav.Link id="last_nav">123-456-789</Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs