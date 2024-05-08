import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './FinalLogo.png'
import '../Navbar/Navbar2.css'
import AboutButton from '../AboutButton/AboutButton'

export function Navbar2({ page, setPage }: { page: string; setPage: (newPage: string) => void }) {

  const handleNavClick = (newPage: string) => {
    setPage(newPage);
  }

  return (
    <Navbar sticky="top" style={{ color: 'white', backgroundColor: '#21273b', height: '4rem', marginTop: '.25rem', marginRight: '.25rem', marginLeft: '.25rem' }} data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => handleNavClick("Home")} href="#home" className='brand-logo'>
          <img src={logo} alt='logo' className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Nav className="d-flex flex-grow-1 align-items-left me-auto">
            <Nav.Link onClick={() => handleNavClick("Home")}>
              {(page === "Home" && (<div className='navbar-selected'>Home</div>)) || (page !== "Home" && (<div>Home</div>))}
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Basic")}>
              {(page === "Basic" && (<div className='navbar-selected'>Basic</div>)) || (page !== "Basic" && (<div>Basic</div>))}
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Detailed")}>
              {(page === "Detailed" && (<div className='navbar-selected'>Detailed</div>)) || (page !== "Detailed" && (<div>Detailed</div>))}
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Results")}>
              {(page === "Results" && (<div className='navbar-selected'>Results</div>)) || (page !== "Results" && (<div>Results</div>))}
            </Nav.Link>
          </Nav>
          <div className='ms-auto algin-items'>
            <AboutButton page={page} setPage={setPage}></AboutButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
