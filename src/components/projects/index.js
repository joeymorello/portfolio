import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './projects.css'

export default () => (
   <StaticQuery
     query={graphql` 
 query ProjectsQuery {
   allContentfulProject(
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
       showProject: {eq: true}
     }
     ) {
     edges {
       node {
         id
         slug
         title
         seoKeywords
         category {
             title
             id
         }
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
 }
`}
     render={data => (
         <section id="projects">
         <h1 className='header__title'>Projects</h1>
            <div className='feed'>
                {data.allContentfulProject.edges.map(edge => (
                <div key={edge.node.id} className='project__item' onClick={() => navigate(`/project/${edge.node.slug}`)} >
       
                  <h2 className='project__title'>{edge.node.title}</h2>
                  <div className='side__scroll'>
                    <p className='project__keywords'>{edge.node.seoKeywords}</p>
                  </div>
                        {/* {edge.node.categories.map(category => (
                            <p className='card__category'>{category.title}</p>
                        ))} */}
              </div>
                ))}
            </div>
        </section>
     )}
   />
 )
