import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color: 'white'  }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Navbar = ({ children }) => (
  <div>
    <ul style={{ listStyle: `none`, float: `right`}}>
      <ListLink to="/page-2/">Go to page 2</ListLink>
      <ListLink to="/projects">Projects</ListLink>
      <ListLink to="/sponsors">Sponsors</ListLink>
      <ListLink to="/about">About</ListLink>
    </ul>
  </div>
)

export default Navbar

// style={{
//   margin: 'auto',
//   display: 'flex',
//   justifyContent: 'space-around',
// }}
