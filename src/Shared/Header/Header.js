import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProdiver';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand><Link to='/'>PANDA NEWS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Category</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='justify-content-between align-items-center'>
                        <Nav.Link href="#deets">
                            {user?.uid ?
                                <><span>{user?.displayName}</span>

                                </>
                                :
                                <div>
                                    <Link to={'/login'}>Login</Link>
                                    <Link to={'/register'}>Register</Link>
                                </div>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUserAlt></FaUserAlt>

                            }
                            <Button className='ms-3' variant='outline-dark' onClick={handleLogOut}>Log Out</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;