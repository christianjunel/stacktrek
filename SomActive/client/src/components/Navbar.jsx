import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import somactiveLogo from './imgs/somactive-logo-small-blue.png';

import './styles/Navbar.css';
import { Link } from "react-router-dom"
import BMIModalLink from './BMIModalLink';
import MacroCalculatorLink from './MacroCalculatorLink';


const NavbarComp = props => {

    return (
        <div>
            <Navbar className='main-nav' expand="lg" variant='light'>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={somactiveLogo}
                        width="70"
                        // height="94"
                        className="d-inline-block align-top"
                        alt="Somactive Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="basic-navbar-nav" bg="light">
                <Nav
                    className="me-auto my-2 my-lg-0"
                >
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <NavDropdown title="Start Now" id="navbarScrollingDropdown">
                        <BMIModalLink />
                        <MacroCalculatorLink />
                        
                    </NavDropdown>
                    {/* <Nav.Link href="#">
                        Contact
                    </Nav.Link> */}
                </Nav>
                <Nav className='right-nav'>
                <Button variant="danger" as={Link} to={'/register'}>Register Here</Button>
                <Nav.Link as={Link} to={'/login'}>Log in</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
}

export default NavbarComp;