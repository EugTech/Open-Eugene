import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import projects from '../json/projects'
import ProjectCard from '../components/projectCard'

class ProjectsPage extends Component {
  render() {
    const projectCards = projects.map((project, i) => {
      return <ProjectCard {...project} />
    })
    return (
      <Layout>
        <h1>Eugene Open Source Projects</h1>
        <p>
          A list of the projects that will be at OpenEugene Fest displayed here.
        </p>
        {projectCards}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
export default ProjectsPage
