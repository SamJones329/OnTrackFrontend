import React from 'react';
import '../App.css';
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import './Home.scss';

export default function Home(props: {children?: React.ReactNode}) {
  return <div className="App">
    <header className="App-header">
      <div className='title-margin'>
        <h1>OnTrack</h1>
        <p>Browse majors, find classes, and plan your degree with Ontrack.</p>
      </div>

      <Container>
        <Row className='row justify-content-center'>
          <Col md={4} className='d-flex justify-content-center'>
            <Card className='home-card'>
              <Card.Header as="h5" className='home-card-text'>Course Listings</Card.Header>
              <Card.Body>
                <Card.Text className='home-card-text'>
                  Search for your degree program and view a semester-by-semester breakdown of what you need for your degree.
                </Card.Text>
                <Card.Link href="/geaux-hack-2022/courselist">Try Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card className='home-card'>
              <Card.Header as="h5" className='home-card-text'>Flowcharts</Card.Header>
              <Card.Body>
                <Card.Text className='home-card-text'>
                  Better understand your degree by visualizing prerequisites and corequisites in an interactive flowchart.
                </Card.Text>
                <Card.Link href="/geaux-hack-2022/flowchart">Try Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </header>
    {props.children}
  </div>
}