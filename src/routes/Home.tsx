import React from 'react';
import '../App.css';
import logo from '../logo.svg';

export default function Home(props: {children?: React.ReactNode}) {
  return <div className="App">
    <header className="App-header">
      <h1>OnTrack</h1>
      <p>Browse majors, find classes, and plan your degree with Ontrack.</p>
    </header>
    {props.children}
  </div>
}