import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './cv.css'

export default () => (
   <StaticQuery
     query={graphql` 
     query CVQuery {
        allContentfulCvSection {
            edges {
            node {
                id
                title
                cvContent {
                cvContent
                id
                }
            }
            }
        }
    }
`}
     render={data => (
       <section id="contact">
         {data.allContentfulCvSection.edges.map(edge => (
             <div key={edge.node.id} className='header__section'>           
                   <h1 className='header__title'>{edge.node.title}</h1>
                   <p key={edge.node.cvContent.id}>{edge.node.cvContent.cvContent}</p>
             </div>
         ))}
       </section>
     )}
   />
 )
