import React from "react"
import Intro from "../components/intro/index"
import Projects from "../components/projectFeed/index"
import CV from "../components/cv/index"
import Contact from "../components/contact/index"
import Nav from "../components/nav"
import Accounts from "../components/accounts"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Accounts />
    <Nav />
    <Intro />
    <Projects />
    <CV />
    <Contact />
  </Layout>
)

export default IndexPage
