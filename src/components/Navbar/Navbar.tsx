import * as React from 'react';
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navbar.scss';


export default function Navbar(props: {children?: React.ReactNode}) {
  return (
    <div className='custom-nav'>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Row>
              <Col md={3} className="link-button"><Link to={"/geaux-hack-2022/"} className="custom-link">Home</Link></Col>
              <Col md={3} className="link-button"><Link to={"/geaux-hack-2022/courselist"} className="custom-link">Course List</Link></Col>
              <Col md={3} className="link-button"><Link to={"/geaux-hack-2022/flowchart"} className="custom-link">Flowchart</Link></Col>
              <Col md={3} className="link-button"><Link to={"/geaux-hack-2022/about"} className="custom-link">About</Link></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {props.children}
    </div>
  )
}