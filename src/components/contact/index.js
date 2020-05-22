import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './contact.css'

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
       <section id="contact">
         {data.allContentfulContactSection.edges.map(edge => (
             <div key={edge.node.id}>
             <h1 className='header__title'>{edge.node.title}</h1>
              <div className="contact__container">  
                  <div className="email">        
                    <a href="mailto:joeymorello.one@gmail.com">{edge.node.emailLink}</a>
                  </div>
              </div>
             </div>
         ))}
       </section>
     )}
   />
 )
