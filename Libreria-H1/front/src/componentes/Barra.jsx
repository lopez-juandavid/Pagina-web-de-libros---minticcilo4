import React from 'react'
import { Navbar, Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button  } from 'react-bootstrap';
import './Styles.css';
import eraseunavez from '../assets/eraseunavez.png';


export default function Barra() {
    return (
        <div className="contenedor-barra" >
            <Navbar variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Brand href="#"><h2>Libreria Había Una Vez</h2>
                    </Navbar.Brand>
                
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/ingresar">Iniciar sesión</Nav.Link>
                    <NavDropdown title="Registrar" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="/registrarUsuario">Nuevo usuario</NavDropdown.Item>
                        <NavDropdown.Item href="/registrarLibro">Nuevo libro</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action4">Ver libros</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar: Titulo, Autor"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div >
                <img
                    className="d-block w-100"
                    src={eraseunavez}
                    alt="logo"
                    />
                </div>

            </Container>
            </Navbar>

            
        </div>
    )
}
