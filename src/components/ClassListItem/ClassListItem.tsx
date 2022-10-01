import * as React from 'react';
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";
import "./ClassListItem.scss"

export default function ClassListItem(props: {children?: React.ReactNode}) {
    return (
      <div className='item'>
        <Container>
            <Row>
                <Col id="courseNumber">CSC4044</Col>
                <Col id="courseTitle">Coding for Gamers</Col>
            </Row>
        </Container>
        {props.children}
      </div>
    )
}