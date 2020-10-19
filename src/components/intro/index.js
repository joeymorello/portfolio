import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { useSpring, animated } from "react-spring"

import './intro.scss'

export default () => {
  const spacing = useSpring({ from: { letterSpacing: '1.125em' }, letterSpacing: '0em', config: { tension: 100, friction: 15 } });

  return (
   <StaticQuery
     query={graphql` 
     query IntroQuery {
      allContentfulIntroSection {
        edges {
          node {
            id
            title
            name
            description
            location
            focus
          }
        }
      }
    }
`}
     render={data => (
        <animated.section id="intro" style={spacing}>
          {data.allContentfulIntroSection.edges.map(edge => (
              <div key={edge.node.id} className='header__content'>
                    <h1 className="intro__name">{edge.node.name}</h1>
                    <h2 className="intro__description">{edge.node.description}</h2>
                    <h3 className="intro__location">{edge.node.location}</h3>
                      <a href="#projects">
                        <div className="intro-scroll">
                            <i></i><i></i><i></i>
                        </div>
                      </a>
              </div>
          ))}
        </animated.section>
      )}
    />
  )
}
