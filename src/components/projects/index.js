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
         <h1 className='header__title'>Projects</h1>
            <div className='feed'>
            {/* <ul>
              <li  className={data='web' ? 'nav__item--link active' : 'nav__item--link'} onClick={ } >web</li>
              <li>3d</li>            
            </ul> */}
                {data.allContentfulProject.edges.map(edge => (
                <div data={'web'} key={edge.node.id} className='project__item' onClick={() => navigate(`/project/${edge.node.slug}`)} >
       
                  <p className='card__category'>{edge.node.projectType}</p>
                  <h2 className='project__title'>{edge.node.title}</h2>
                  <div className='side__scroll'>
                    <p className='project__keywords'>{edge.node.seoKeywords}</p>
                  </div>
                  
                    {/* {edge.node.category.map(title => (
                      <p className='card__category'>{title}</p>
                    ))} */}

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


//  .visuallyhidden { 
//   position: absolute; 
//   overflow: hidden; 
//   clip: rect(0 0 0 0); 
//   height: 1px; width: 1px; 
//   margin: -1px; padding: 0; border: 0; 
// }