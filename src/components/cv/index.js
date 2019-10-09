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
          download
          cvContent {
            childMarkdownRemark {
              html
            }
          }
          id
        }
      }
    }
  }
`}
     render={data => (
       <section id="cv">
         {data.allContentfulCvSection.edges.map(edge => (
             <div key={edge.node.id} className='header__section'>           
                   <h1 className='header__title'>{edge.node.title}</h1>
                   <div className='project__content'>
                   <div dangerouslySetInnerHTML={
                      {__html: `${edge.node.cvContent.childMarkdownRemark.html}`}
                    } />
                   </div>
                   <a href="https://joeymorello.com/assets/resume_morello.pdf" target="_blank">{edge.node.download}</a>
             </div>
         ))}
       </section>
     )}
   />
 )