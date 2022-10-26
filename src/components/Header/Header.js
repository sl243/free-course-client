import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    // user sign out
    const handleSignOut = () => {
        console.log('clicked')
        userSignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="success">
            <Container>
                <Navbar.Brand><Link to='/'>Webcode</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        {user?.uid ?
                            <>
                                {/* <Button className='me-2' variant="outline-light">{user?.displayName}</Button> */}
                                <Link to='/profile'>
                                    {
                                        user?.photoURL ?
                                            <Image
                                                title={user?.displayName}
                                                src={user?.photoURL}
                                                style={{ height: '40px' }}
                                                roundedCircle
                                            ></Image>
                                            :
                                            <FaUser></FaUser>
                                    }
                                </Link>
                                <Button onClick={handleSignOut} className='me-2 ms-2' variant="outline-light">Logout</Button>
                            </>
                            :
                            <>
                                <Link to='/login'><Button className='me-2' variant="outline-success">Login</Button></Link>
                                <Link to='/register'><Button variant="outline-success">Register</Button></Link>
                            </>
                        }
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;