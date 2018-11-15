import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>What is Open Eugene Festival?</h1>
    <p>You’ll see Mozilla’s ethos of “open” in action at the festival – it’s about making concepts and projects 1) easy to understand, 2) easy to share, remix and build on, and 3) welcoming to all participants, from any background. Open Eugene Festival is a great space to experience and experiment with this approach—we call it “working open”</p>
    <p>The Festival is part hack-a-thon, part conference, part art exhibition. We are working with learners & leaders to help citizens of Eugene open projects, improve collaboration, and inspire the community. <a href="https://youtu.be/8VDYcNPw9zA">Here's a 5-minute explainer video</a> from <a href="https://github.com/nohorse">Mark Davis</a></p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/sponsors">Sponsors</Link>
  </Layout>
)

export default IndexPage
