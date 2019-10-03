import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './footer.css'

export default () => (
   <StaticQuery
     query={graphql` 
     query ContactQuery {
        allContentfulContactSection {
            edges {
            node {
                id
                title
                emailLink
            }
            }
        }
    }
`}
     render={data => (
       <footer id="contact">
         {data.allContentfulContactSection.edges.map(edge => (
             <div key={edge.node.id} className='header__section'>           
                   <h1 className='header__title'>{edge.node.title}</h1>
                   <a href="mailto:joeymorello.one@gmail.com">{edge.node.emailLink}</a>
             </div>
         ))}
       </footer>
     )}
   />
 )
