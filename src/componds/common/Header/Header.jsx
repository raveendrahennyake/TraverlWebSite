import React, { useState,useEffect } from 'react'
import './Header.css'
import {Container, Row,NavDropdown,Nav,Navbar,Offcanvas,NavLink } from 'react-bootstrap';

const Header = () => {
  const [open,setopens]=useState(false);

  const togglemenu=()=>{
    setopens(!open);
  }

  useEffect(() => {
    window.addEventListener("scroll", isStick);
    return () => {
      window.removeEventListener("scroll", isStick);
    };
  }, []); 
  

  const isStick = (e) => {
    const header = document.querySelector('.header-section'); 
    if (header) {
      const scrollTop = window.scrollY;
      scrollTop >= 120 ? header.classList.add('is-stickey') : header.classList.remove('is-stickey');
    }
  };
  
  return (
    <div header className='header-section'>
      <Container className='w-100 p-3'>
        <Row>
        <Navbar bexpand='lg' className=" mb-3 bg-secondary text-white ">
          <Container fluid>
            <Navbar.Brand className='nav-bar-a' href="#">
              <NavLink to='./'>WeekendMarks</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-labelledby={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              <Offcanvas.Header>
                <h1 className='log'> WeekendMarks</h1>
                <span className='navbar-tologger ms-auto' onClick={togglemenu}>
                  <NavLink >
                    <li className=''><i class="bi bi-list"></i></li>
                    </NavLink> 

                </span> 
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  <NavLink classname='nav-link' to='/Home'>HOME</NavLink>
                  <NavLink classname='nav-link' to='/About'>ABOUT</NavLink>
                  <NavLink classname='nav-link' to='/Contact'>TOURS</NavLink>
                  <NavDropdown
                  
                    title="DESTINATION"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                   
                  >
                    <NavDropdown.Item href="#action3">SPAIN TOURS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     ITALY TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                   FRANCE TOURS
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavLink classname='nav-link' to='/GALLERY'>GALLERY</NavLink>
                  <NavLink classname='nav-link' to='/CONTACT'>CONTACT</NavLink>
                </Nav>
                 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='ms-md-4 ms-2 '>
              <NavLink id='bookbutton' className="primaryBtn d-none d-sm-inline-block border border-dark" onClick={togglemenu}>
                BookNow 
              </NavLink>
              <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                <i class="bi bi-list" onClick={togglemenu}></i>

              </li>

            </div>

          </Container>
        </Navbar>
        
        </Row>

      </Container>
      
    </div>
  )
}

export default Header
