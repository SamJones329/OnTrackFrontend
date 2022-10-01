import initSqlJs from 'sql.js';
import { BASE_PATH } from './Constants';
let initdone: boolean = false;

async function initDB() {
  initdone = true;
  return initdone
}

function dbReady() {
  return initdone;
}

function getMajors() {
  return ['Computer Science (SWE)', 'Computer Science (CCN)']
}

interface Course {
  courseDept: string
  courseNumber: number
  courseName: string
  courseDesc: string
  hours: number
  prereqs: string[]
  coreqs: string[]
}


interface Semester {
  semesterNum: number
  classes: Course[]
}

function getMajorCourses(major: string): Semester[] {
  return [
    {
      semesterNum: 1,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 1350,
          courseName: 'Computer Science I for Majors',
          courseDesc: 'Fundamentals of algorithm development, program design and structured programming using an object-oriented language.',
          hours: 4,
          prereqs: [],
          coreqs: []
        }
      ]
    },
    {
      semesterNum: 2,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 1351,
          courseName: 'Computer Science II for Majors',
          courseDesc: 'Develops solutions to problems using an object-oriented approach and emphasizes the concepts of recursion; dynamic memory; data structures (lists, stacks, queues, trees); exception handling.',
          hours: 4,
          prereqs: ['CSC1350'],
          coreqs: ['MATH1550']
        }
      ]
    },
    {
      semesterNum: 3,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 3102,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        }
      ]
    },
  ]
}

export type { Course, Semester }
export { initDB, dbReady, getMajors, getMajorCourses }