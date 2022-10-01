import * as React from 'react';
import {
    Container,
    Row,
    Col,
    Accordion
  } from "react-bootstrap";
import "./ClassListItem.scss"

export default function ClassListItem(props: {children?: React.ReactNode}) {
    return (
      <div>
        <h1 id="semester" className="accordion-label">Fall 2077</h1>
        <Accordion alwaysOpen style={{width: "50em"}}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <Container>
                <Row>
                  <Col md={2} id='courseNumber'>CSC5621</Col>
                  <Col md={6} id='courseName'>Intro To Whatever</Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              Description
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
            <Container>
                <Row>
                  <Col md={2} id='courseNumber'>CSC5621</Col>
                  <Col md={6} id='courseName'>Intro To Whatever</Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              Description
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {props.children}
      </div>
    )
}