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
  substitutions: string[]
  prereqs: string[]
  coreqs: string[]
}


interface Semester {
  semesterNum: number
  classes: Course[]
}

const majors: {[index: string]: Semester[]} = {
  'Computer Science (SWE)': [
    {
      semesterNum: 1,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 1350,
          courseName: 'Computer Science I for Majors',
          courseDesc: 'Fundamentals of algorithm development, program design and structured programming using an object-oriented language.',
          hours: 4,
          substitutions: [],
          prereqs: [],
          coreqs: []
        },
        {
          courseDept: 'MATH',
          courseNumber: 1550,
          courseName: 'Differential and Integral Calcular',
          courseDesc: 'Limits, derivatives, and integrals of algebraic, exponential, logarithmic, and trigonometric functions, with applications.',
          hours: 5,
          substitutions: ['MATH1551'],
          prereqs: [],
          coreqs: []
        },
        {
          courseDept: 'ENGL',
          courseNumber: 1001,
          courseName: 'English Composition I',
          courseDesc: 'Introduction to analytical writing and research-based inquiry.',
          hours: 3,
          substitutions: [],
          prereqs: [],
          coreqs: []
        },
        {
          courseDept: 'BIOL',
          courseNumber: 1001,
          courseName: 'Biology I',
          courseDesc: 'General concepts in cell biology, genetics, ecology and evolution.',
          hours: 4,
          substitutions: ['BIOL1201'],
          prereqs: [],
          coreqs: []
        },
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
          substitutions: [],
          prereqs: ['CSC1350'],
          coreqs: ['MATH1550']
        },
        {
          courseDept: 'MATH',
          courseNumber: 1552,
          courseName: 'Computer Science II for Majors',
          courseDesc: 'Develops solutions to problems using an object-oriented approach and emphasizes the concepts of recursion; dynamic memory; data structures (lists, stacks, queues, trees); exception handling.',
          hours: 4,
          substitutions: ['MATH1553'],
          prereqs: ['MATH1550'],
          coreqs: ['MATH1550']
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'HUM or ENGL course',
          courseDesc: 'General Education requirement for 3+ hour humanities or english course.',
          hours: 3,
          substitutions: ['HNRS2000'],
          prereqs: [],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'Physical science requirement',
          courseDesc: 'General education 3+ hour physical science course requirement.',
          hours: 3,
          substitutions: [],
          prereqs: [],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'Science Sequence Lab',
          courseDesc: 'General education requirement for taking a lab corresponding to a class in your science sequence.',
          hours: 1,
          substitutions: [],
          prereqs: [],
          coreqs: []
        },
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
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 2259,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'MATH',
          courseNumber: 2090,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: '',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 2259,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
    {
      semesterNum: 4,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 3304,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 3501,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 2262,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'ENGL',
          courseNumber: 2000,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: '',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
    {
      semesterNum: 5,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 3380,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 2259,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 4101,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'IE',
          courseNumber: 3302,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 3200,
          courseName: '',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'Tech Elective',
          courseNumber: 0,
          courseName: 'Group A',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
    {
      semesterNum: 6,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 4402,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 4351,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 4103,
          courseName: 'Discrete Structures',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'Tech Elective',
          courseNumber: 0,
          courseName: 'Group A or B',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: '',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
    {
      semesterNum: 7,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 4330,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 2000,
          courseName: '2000+ CSC Area Elective',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 0,
          courseName: 'Area Elective',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'Approved Elective',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: 'Social Science 2000+',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
    {
      semesterNum: 8,
      classes: [
        {
          courseDept: 'CSC',
          courseNumber: 4332,
          courseName: 'Data Structures & Algorithms',
          courseDesc: 'DSA or something idk',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 2000,
          courseName: '2000+ CSC Course',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 0,
          courseName: 'Area Elective',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'CSC',
          courseNumber: 0,
          courseName: 'Approved Elective',
          courseDesc: 'Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
        {
          courseDept: 'GenEd',
          courseNumber: 0,
          courseName: '',
          courseDesc: 'General education arts course.',
          hours: 3,
          substitutions: [],
          prereqs: ['CSC1351', 'CSC2259'],
          coreqs: []
        },
      ]
    },
  ]
}
function getMajorCourses(major: string): Semester[] {
  return majors[major]
}

export type { Course, Semester }
export { initDB, dbReady, getMajors, getMajorCourses }