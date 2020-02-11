import React from "react"
import { graphql, navigate, StaticQuery } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import './home.css'



export default () => (
   <StaticQuery
     query={graphql` 
 query SceneShopQuery {
  allContentfulSceneShopGallery {
     edges {
       node {
         id
         image {
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
        <div className='feed'>
            {data.allContentfulSceneShopGallery.edges.map(edge => (
                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom, 
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.image.fluid.src})`
                }}
            >
            </div>
            ))}
        </div>
     )}
   />
 )
