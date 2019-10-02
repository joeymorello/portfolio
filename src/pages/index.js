import React from "react"
import Intro from "../components/intro/index"
import Projects from "../components/projects/index"
import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Intro />
    <Projects />
  </Layout>
)

export default IndexPage
