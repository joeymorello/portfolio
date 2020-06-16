import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Whoops" />
      <div className="copy__container">
        <h1>404</h1>
        <Link className="link--box-style" to='/'>Portfolio</Link>
      </div>
  </Layout>
)

export default NotFoundPage
