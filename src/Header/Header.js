import React from 'react';

import { NavLink, Link } from 'react-router-dom';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (<>

        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/home"><img src="./../images/react.png" className="reactlogo" alt="vijaysirimage" style={{ height: '60px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/clickbuttondata">Clickbuttondata</Nav.Link>
                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    <img src="./../images/react.png" className="reactlogo" alt="vijaysirimage" style={{ height: '60px' }} />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/home">Home <span className="sr-only">(current)</span></NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/services">Services</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/contact" >Contact</NavLink>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/training" id="navbarDropdown" data-toggle="dropdown" >
                                Training
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/training/reactjsc">React</Link>
                                <Link className="dropdown-item" to="/training/reactnativejs">ReactNative</Link>

                                <Link className="dropdown-item" to="/training/nodejs">Nodejs</Link>
                            </div>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/react-class-component" >ReactClassComp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/state" >State</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/clickbuttondata" >Clickbuttondata</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/dynamicdataapi" >Dynadataapi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/signup" >Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/searchbox" >Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/redux" >Redux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/hooksApi" >hooksApi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/HooksSignup" >hookSignup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/paginationTask" >PaginationTask</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/demo" >HOC_Demo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeStyle={{ backgroundColor: '#eee', color: 'purple' }} to="/useContext" >useContextHooks</NavLink>
                        </li>


                        {/* <li className=" nav-link nav-item  dropdown">
                            <Link  to="/about">Training</Link>
                            <span className=" dropdown-toggle" data-toggle="dropdown"></span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/training/reactjsc">React</Link>
                                <Link className="dropdown-item" to="/training/reactnativejs">ReactNative</Link>
                             
                                <Link className="dropdown-item" to="/training/nodejs">Nodejs</Link>
                            </div>
                        </li> */}



                    </ul>
                </div>
            </div>
        </nav>




    </>);
};

export default Header;