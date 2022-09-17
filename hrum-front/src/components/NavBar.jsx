import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import {RiShoppingBasket2Line} from "react-icons/ri";
import "../css/App.css"

const NavBar = ({binIsEmpty = true}) => {
    return (
        <div>
            <Navbar key="sm" className="navbar navbar-expand-lg" sticky="top" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#">
                        Logo
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />

                    <Navbar.Offcanvas
                        id={"offcanvasNavbar-expand-sm"}
                        aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Меню</Nav.Link>
                                <Nav.Link href="#action2">Контакты</Nav.Link>
                                <Nav.Link href="#action2">Отзывы</Nav.Link>
                            </Nav>

                            <div className="bin-wrapper">
                                <Button variant="light">

                                    <div className={
                                        `bin-indicator-active ${binIsEmpty 
                                            ? 'bin-indicator-disable' 
                                            : ''
                                        }`
                                    }></div>

                                    <RiShoppingBasket2Line />
                                </Button>
                            </div>
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
