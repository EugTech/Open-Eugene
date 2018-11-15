import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ProjectsPage = () => (
  <Layout>
    <h1>Eugene Open Source Projects</h1>
    <p>A list of the projects that will be at OpenEugene Fest displayed here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
