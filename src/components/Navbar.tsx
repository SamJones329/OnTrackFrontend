import * as React from 'react';

export default function Navbar(props: {children?: React.ReactNode}) {
  return (
    <div>
      <ul>
        <li>Fuck You</li>
        <li>asdf</li>
        <li>what</li>
        <li>gamer</li>
        <li>...</li>
      </ul>
      {props.children}
    </div>
  )
}