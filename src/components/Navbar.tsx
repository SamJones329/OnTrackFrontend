import * as React from 'react';
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import CourseList from './CourseList';
import './Navbar.scss';


export default function Navbar(props: {children?: React.ReactNode}) {
  return (
    <div className='navbar'>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Row>
              <Col md={4} className="link-button"><Link to={"/geaux-hack-2022/courselist"}>Course List</Link></Col>
              <Col md={4} className="link-button"><Link to={"/geaux-hack-2022/flowchart"}>Flowchart</Link></Col>
              <Col md={4} className="link-button"><Link to={"/geaux-hack-2022/about"}>About</Link></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {props.children}
    </div>
  )
}