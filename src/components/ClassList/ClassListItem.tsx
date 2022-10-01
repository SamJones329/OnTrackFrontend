import * as React from 'react';
import {
    Container,
    Row,
    Col,
    Accordion
  } from "react-bootstrap";
import "./ClassListItem.scss"

interface ClassListItemProps {
  courseDept: string
  courseNumber: number
  courseName: string
  courseDesc: string
  prereqIDs: Array<string>
  coreqIDs: Array<string>
  accordionEventKey: string
}

export default function ClassListItem(props: ClassListItemProps) {
    return (
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          <Container>
            <Row>
              <Col md={2} id='courseNumber'>{props.courseDept}</Col>
              <Col md={6} id='courseName'>{props.courseName}</Col>
            </Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          {props.courseDesc}
          {props.prereqIDs}
          {props.coreqIDs}
        </Accordion.Body>
      </Accordion.Item>
    )
}