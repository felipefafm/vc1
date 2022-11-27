
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Alert from 'react-bootstrap/Alert'
import BotonNav from '../BotonNav/BotonNav';


function CollapsNav(props) {

  const handleOnClick = () => {
    alert("Aca encontraras lo que buscas")
  }

 

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       
        <img src="./images/logovc.png" alt="logo" width="100" height="100" />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <BotonNav textoNav="Cap" func={handleOnClick} />
          <BotonNav textoNav="Gorras" />
          <BotonNav textoNav="Contacto" />
           
          </Nav>
          <Nav>

            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsNav;