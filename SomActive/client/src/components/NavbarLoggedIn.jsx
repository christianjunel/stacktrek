import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import somactiveLogo from './imgs/somactive-logo-small-blue.png';

import './styles/Navbar.css';
import { Link } from "react-router-dom"


const NavbarCompLoggedIn = ({ setAuth }) => {
    // setAuth(true)
    const logout = (e) => {
        e.preventDefault()
        try {
            //removing the token from localstorage
            localStorage.removeItem('token')
            setAuth(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <Navbar bg="light" expand="lg" className='main-nav'>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={somactiveLogo}
                        width="70"
                        className="d-inline-block align-top"
                        alt="Somactive Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="me-auto my-2 my-lg-0"
                >
                    <Nav.Link as={Link} to={'/dashboard'}>Home</Nav.Link>
                    <NavDropdown title="Workouts" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to={'/workouts/aerobic'}>Aerobic</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/workouts/anaerobic'}>
                            Anaerobic
                        </NavDropdown.Item>    
                    </NavDropdown>
                    {/* <Nav.Link href="#nutrition-videos">
                        Nutrition
                    </Nav.Link> */}
                </Nav>
                <Nav>
                <Button variant="danger" onClick={logout}>Log out</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavbarCompLoggedIn;