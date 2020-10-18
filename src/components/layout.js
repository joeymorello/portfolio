import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import 'normalize.css';

import "./layout.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1, config: { duration: 500 } });

  return (
    <>
    <animated.main style={fade}>{children}</animated.main>
    <footer>
          © {new Date().getFullYear()} | joey morello
          {``}
          {/* <a href="https://www.gatsbyjs.org">joey</a> */}
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout