import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Style.css'
const InfluencerNavbar = () => {
  return (
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
            <Container id='cont'>
            <Navbar.Brand href="#home" id='brand'>InfluenBlend</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" id='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" id='nav-link'>About</Nav.Link>
                <Nav.Link href="#link" id='nav-link'>Contact</Nav.Link>
                <Nav.Link href="#link" id='nav-link'>Blog</Nav.Link>
                <Nav.Link href="#link" id='nav-link'>Explore influencer</Nav.Link>
                <NavDropdown title={  <img src='./images/Group.png' className='img2' alt=''></img>} id="basic-nav-dropdown" className='dropdown-notification'>

                </NavDropdown>
                <NavDropdown title={  <img src='./images/image1.png' className='img' alt=''></img>} id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">
                            <a href='/' alt='' className='sub-menu-link'>
                                <img src='/images/image1.png' alt='loading' />
                                <p>Edit Profile</p>
                                <span>{'>'}</span>
                            </a>
                            
                        </NavDropdown.Item>
                        `1`
                        <NavDropdown.Item href="#action/3.2">
                            <a href='/' alt='' className='sub-menu-link'>
                                <p>Offers</p>
                                <span>{'>'}</span>
                            </a>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.3">
                            <a href='/' alt='' className='sub-menu-link'>
                                <img src='/images/settings.png' alt='loading' />
                                <p>Settings & Privacy</p>
                                <span>{'>'}</span>
                            </a>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.3">
                            <a href='/' alt='' className='sub-menu-link'>
                                <img src='/images/favorites.png' alt='loading' />
                                <p>Favorites</p>
                                <span>{'>'}</span>
                            </a>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.3">    
                            <a href='/' alt='' className='sub-menu-link'>
                            <img src='/images/log-out.png' alt='loading' />
                            <p>Log out</p>
                            <span>{'>'}</span>
                            </a>
                        </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default InfluencerNavbar
