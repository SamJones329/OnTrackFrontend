import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import About from './routes/about/About';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import Flowchart from './components/Flowchart';
import 'bootstrap/dist/css/bootstrap-grid.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route path="geaux-hack-2022">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courselist" element={<CourseList />}/>
        <Route path="flowchart" element={<Flowchart />}/>
      </Route>
    </Route>
  ))
  return (
    <Navbar>
      <RouterProvider router={router} />
    </Navbar>
  );
}

export default App;
