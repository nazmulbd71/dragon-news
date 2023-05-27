import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
    }
    return (

        <Container>
            <Navbar className='my-3' collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="text-decoration-none text-white" to="/category/0">Home</Link>
                        <Link className="text-decoration-none text-white mx-4" to="/">About</Link>
                        <Link className="text-decoration-none text-white" to="/">Career</Link>

                    </Nav>
                    <Nav>
                        {
                            user && <FaUserCircle className='me-2' style={{ fontSize: '2rem', color: 'red' }}></FaUserCircle>
                        }


                        {
                            user ? <button onClick={handleLogout}>Logout</button> : <Link to="/login"><button>Login</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
};

export default NavigationBar;