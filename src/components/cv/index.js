import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './cv.scss'

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
             <div key={edge.node.id} className='cv__section'>           
                   <h1 className='header__title'>{edge.node.title}</h1>
                   <div className='cv__wrapper'>
                    <div className='cv__content'>
                      <div dangerouslySetInnerHTML={
                          {__html: `${edge.node.cvContent.childMarkdownRemark.html}`}
                        } />
                    </div>
                   </div>
                  <div className="resume__download">
                    <a className="link--box-style" href="http://assets.ctfassets.net/uhm8x1oz427f/5Cf3ULS1tAB6wbtmP0siQW/c95b89f42795376f55c99bd14613302f/resume-morello--general.pdf" target="_blank" rel="noopener noreferrer">{edge.node.download}</a>
                  </div>
             </div>
         ))}
       </section>
     )}
   />
 )