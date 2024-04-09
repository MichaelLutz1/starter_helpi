import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './SmallerWW-removebg-preview.png'
import '../Navbar/Navbar2.css'

function Navbar2() {
  return (
    <Navbar fixed="top" bg="dark bg-dark navbar-custom" style={{height: '5rem'}} data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='brand-logo'>
            <img src={logo} className="logo-img"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://michaellutz1.github.io/starter_helpi/">Home</Nav.Link>
            <Nav.Link href="#Basic">Basic Quiz</Nav.Link>
            <Nav.Link href="#Detailed">Detailed Quiz</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navbar2;