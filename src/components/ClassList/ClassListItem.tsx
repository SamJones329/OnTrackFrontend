import * as React from 'react';
import {
    Container,
    Row,
    Col,
    Accordion
  } from "react-bootstrap";
import { Link } from 'react-router-dom';
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
  const prereqs = [];
  let i = 0;
  for(const req of props.prereqIDs) {
    console.log(req)
    prereqs.push(
      <Link key={i} to={`#${req}`}>{req}</Link>
    )
    i++;
  }
  const coreqs = []
  for(const req of props.coreqIDs) {
    coreqs.push(
      <Link key={i} to={`#${req}`}>{req}</Link>
    )
    i++;
  }

  return (
    <Accordion.Item eventKey={props.accordionEventKey} id={props.courseDept + props.courseNumber} className='accordion-pad'>
      <Accordion.Header>
        <Container>
          <Row>
            <Col md={2} id='courseNumber'>{props.courseDept + " " + props.courseNumber}</Col>
            <Col md={6} id='courseName'>{props.courseName}</Col>
          </Row>
        </Container>
      </Accordion.Header>
      <Accordion.Body className="form-bg">
        {props.courseDesc}
        {prereqs.length
          ? <><span>{" Pre-Requisites: "}</span> {prereqs}</>
          : <></>
        }
        {coreqs.length
          ? <><span>{" Co-Requisites: "}</span> {coreqs}</>
          : <></>
        }
      </Accordion.Body>
    </Accordion.Item>
  )
}