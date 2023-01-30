import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-lg mb-4" sticky="top">
      <Container>
        <NavbarBs.Brand>PL App</NavbarBs.Brand>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/teams" as={NavLink}>
            Teams
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
