import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
    return (
        <div>
            <Navbar key="sm" className="navbar navbar-expand-lg navbar__extend" sticky="top" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#">
                        Logo
                    </Navbar.Brand>
                    <Navbar.Toggle className="custom-toggler" aria-controls={"offcanvasNavbar-expand-sm"} />
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
                                <Nav.Link className="navbar__extend_text" href="#action1">Меню</Nav.Link>
                                <Nav.Link className="navbar__extend_text" href="#action2">Контакты</Nav.Link>
                                <Nav.Link className="navbar__extend_text" href="#action2">Отзывы</Nav.Link>
                            </Nav>

                            <Button>Bin</Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;