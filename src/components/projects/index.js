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
                    <div key={edge.node.id} className='card'
                    style={{
                        backgroundImage: `linear-gradient(
                        to bottom, 
                        rgba(10,10,10,0) 0%,
                        rgba(10,10,10,0) 50%,
                        rgba(10,10,10,0.7) 100%),
                        url(${edge.node.featuredImage.fluid.src})`
                    }}
                onClick={() => navigate(`/blog/${edge.node.slug}`)} >
                {edge.node.category.map(categories => (
                    <p className='card__category'>{categories.category}</p>
                ))}
                <p className='card__title'>{edge.node.title}</p>
                </div>
                ))}
            </div>
        </section>
     )}
   />
 )
