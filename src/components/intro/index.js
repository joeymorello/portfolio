import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './intro.css'

export default () => (
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
       <section id="intro">
         {data.allContentfulIntroSection.edges.map(edge => (
             <div key={edge.node.id} className='header__content'>
                   <h1 className="intro__name">{edge.node.name}</h1>
                   <h2 className="intro__description">{edge.node.description}</h2>
                   <h3 className="intro__location">{edge.node.location}</h3>
                   {/* <h2>{edge.node.focus}</h2> */}
                    <a href="#projects">
                      <div className="intro-scroll">
                          <i></i><i></i><i></i>
                      </div>
                    </a>
             </div>
         ))}
       </section>
     )}
   />
 )
