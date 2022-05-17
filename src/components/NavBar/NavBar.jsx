import * as React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink} from 'react-router-dom';
import './NavBar.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useCartContext } from "../../CartContext/CartContextProvider";

export const NavBar = () => {
  const { totalCount } = useCartContext();

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href='/react-giordano'>Lenceria YeiMax</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to='/category/gorras' className={nav => nav.isActive ? 'nav-active' : ''}>Gorras</NavLink>
            <NavLink to='/category/medias' className={nav => nav.isActive ? 'nav-active' : ''}>Medias</NavLink>
            <NavLink to='/category/ropa-interior' className={nav => nav.isActive ? 'nav-active' : ''}>Ropa Interior</NavLink>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Chicos</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Pijamas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Proximamente</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action8">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar 🔎"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Buscar</Button>
          </Form>
          {totalCount() > 0 && <CartWidget/>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};