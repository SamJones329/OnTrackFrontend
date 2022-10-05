import * as React from 'react';
import {
  Container,
  Row,
  Col, 
  Nav
} from "react-bootstrap";
import {Navbar as BSNavbar} from "react-bootstrap"
import { Link } from 'react-router-dom';
import './Navbar.scss';


export default function Navbar(props: {children?: React.ReactNode}) {
  return (
    <div className='custom-nav'>
      <BSNavbar>
        <Container className='nav-container'>
          <BSNavbar.Collapse>
            <Nav.Link className="custom-link" href="/geaux-hack-2022/">Home</Nav.Link>
            <Nav.Link className="custom-link" href="/geaux-hack-2022/courselist">Course List</Nav.Link>
            <Nav.Link className="custom-link" href="/geaux-hack-2022/flowchart">Flowchart</Nav.Link>
            <Nav.Link className="custom-link" href="/geaux-hack-2022/about">About</Nav.Link>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
      {props.children}
    </div>
  )
}