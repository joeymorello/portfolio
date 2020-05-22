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
         projectKeywords
         projectType
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
         <div className='header__container'>
          <h1 className='header__title'>Projects</h1>
         </div>
            <div className='feed'>
                {data.allContentfulProject.edges.map(edge => (
                <div data={'web'} key={edge.node.id} className='project__item' onClick={() => navigate(`/project/${edge.node.slug}`)} >
                  <p className='card__category'>{edge.node.projectType}</p>
                  <h2 className='projects__title'>{edge.node.title}</h2>
                  {/* <div className='side__scroll'> */}
                    <div className='project__keywords--container'>
                      <p className='project__keywords'>{edge.node.projectKeywords}</p>
                    </div>
                  {/* </div> */}
                </div>
                ))}
            </div>
        </section>
     )}
   />
 )