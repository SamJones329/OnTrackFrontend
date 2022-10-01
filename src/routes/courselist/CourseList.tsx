import * as React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import ClassList from '../../components/ClassList/ClassList';
import { getMajors, getMajorCourses } from '../../db';
import { useConstructor } from '../../helpers/hooks';

import "./CourseList.scss"

let majors: string[];
export default function CourseList(props: {}) {
  useConstructor(() => {
    majors = getMajors()
  })
  const minStartYear = 2010, maxStartYear = 2025, defaultMajor = majors[0];
  const [startYear, changeStartYear] = React.useState<number>(minStartYear);
  const [endYear, changeEndYear] = React.useState<number>(minStartYear+4);
  const [major, changeMajor] = React.useState<string>(defaultMajor);
  
  const yearOpts = (start: number, end: number) => {
    const opts: Array<React.ReactNode> = []
    for(let i = start; i < end+1; i++) {
      opts.push(<option key={i} value={i}>{i}</option>)
    }
    return opts
  }

  const majorOpts = () => {
    const opts = []
    for(const major of majors) {
      opts.push(<option key={major} value={major}>{major}</option>)
    }
    return opts
  }

  const classLists = []
  const res = getMajorCourses(major)
  console.log(res)
  for(const semester of res) {
    console.log(startYear + semester.semesterNum / 2, semester.semesterNum % 2)
    classLists.push(
      <ClassList 
        semesterYear={Math.floor(startYear + semester.semesterNum / 2)}
        semesterSeason={semester.semesterNum % 2 === 1 ? 'Fall' : 'Spring'}
        classes={semester.classes}
        key={`${startYear}${semester.semesterNum}`}
      />
    )
  }
  
  return (
    <header className="App-header">
      <Container>
        <div  className='spacing'>
        <Form>
          <Row>
            <Col xs={2}>
              <Form.Group>
                <Form.Label>Start Year</Form.Label>
                <Form.Select 
                  value={startYear} 
                  onChange={(e) => {e.preventDefault(); changeStartYear(parseInt(e.target.value))}} 
                  aria-label="start year of degree"
                >
                  {yearOpts(minStartYear, maxStartYear)}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Label>Grad Year</Form.Label>
                <Form.Select
                  value={endYear}
                  onChange={(e) => {e.preventDefault(); changeEndYear(parseInt(e.target.value))}} 
                  aria-label="start year of degree"
                >
                  {yearOpts(startYear+4, maxStartYear+4)}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label>Major</Form.Label>
                <Form.Select 
                  value={major}
                  onChange={(e) => {e.preventDefault(); changeMajor(e.target.value)}} 
                  aria-label="start year of degree"
                >
                  {majorOpts()}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        </div>
        <div>  
          {classLists}
        </div>
      </Container>
    </header>
    )
}