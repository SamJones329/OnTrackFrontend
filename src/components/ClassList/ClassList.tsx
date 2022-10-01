import * as React from 'react';
import { Accordion } from 'react-bootstrap';
import ClassListItem from './ClassListItem';
import type { Course } from '../../db'

interface ClassListProps {
  semesterYear: number
  semesterSeason: 'Fall' | 'Spring'
  classes: Course[]
}

export default function ClassList(props: ClassListProps) {

  const classElems = []
  for(let i = 0; i < props.classes.length; i++) {
    const course = props.classes[i]
    classElems.push(
      <ClassListItem 
        courseDept={course.courseDept}
        courseNumber={course.courseNumber}
        courseName={course.courseName}
        courseDesc={course.courseDesc}
        prereqIDs={course.prereqs}
        coreqIDs={course.coreqs}
        accordionEventKey={`${i}`}
        key={i}
      />
    )
  }

  return (
    <div>
      <h1 id="semester" className="accordion-label">Fall 2077</h1>
        <Accordion alwaysOpen style={{width: "50em"}}>
          {classElems}
        </Accordion>
    </div>
  )
}