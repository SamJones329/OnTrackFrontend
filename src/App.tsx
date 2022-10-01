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
import CourseList from './routes/courselist/CourseList';
import Flowchart from './routes/flowchart/Flowchart';
import 'bootstrap/dist/css/bootstrap-grid.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route path="geaux-hack-2022">
        <Route index element={<> <Navbar /> <Home /> </>} />
        <Route path="about" element={<> <Navbar /> <About /> </>} />
        <Route path="courselist" element={<> <Navbar /> <CourseList /> </>}/>
        <Route path="flowchart" element={<> <Navbar /><Flowchart /> </>}/>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
