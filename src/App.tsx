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
import Navbar from './components/Navbar/Navbar';
import CourseList from './routes/courselist/CourseList';
import Flowchart from './routes/flowchart/Flowchart';


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
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital@1&display=swap" rel="stylesheet" /> 
      <RouterProvider router={router} />
    </>
  );
}

export default App;
