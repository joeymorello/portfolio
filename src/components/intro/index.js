import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './intro.css'

export default () => (
   <StaticQuery
     query={graphql` 
  query IntroQuery {
  allContentfulSection {
    edges {
      node {
        title
      }
    }
  }
}

`}
     render={data => (
       <section>
         {data.allContentfulSection.edges.map(edge => (
             <div key={edge.node.id} className='header__section'>           
                   <h1 className='header__title'>{edge.node.title}</h1>
             </div>
         ))}
       </section>
     )}
   />
 )
