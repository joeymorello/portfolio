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
             <div key={edge.node.id} className='header__section'>
                   {/* <h1 className='header__title'>{edge.node.title}</h1> */}
                <div className='header__content'>            
                   <h2 className="title-delete">{edge.node.name}</h2>
                   <h2>{edge.node.description}</h2>
                   <h2>{edge.node.location}</h2>
                   {/* <h2>{edge.node.focus}</h2> */}
                    <a href="#projects">
                   <div className="intro-scroll">
                      <i></i><i></i><i></i>
                   </div>
                    </a>
                </div>
             </div>
         ))}
       </section>
     )}
   />
 )
