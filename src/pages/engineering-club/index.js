// import React from "react"
// import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
// import { Link } from "gatsby"

// import Layout from "../../components/layout"
// import SEO from "../../components/seo"
// import Img from "gatsby-image"
// import HomeReturn from '../../components/home-return';
// // import './scene-shop.scss'
// import '../../templates/project.scss';

// const EngineeringClub = () => {
//     const data = useStaticQuery(graphql `
//         query Images {
//             images: allFile(filter: {relativeDirectory: {eq: "scene-shop" }}){
//                 nodes {
//                     id
//                     childImageSharp {
//                         fluid(maxWidth: 600) {
//                             ...GatsbyImageSharpFluid 
//                           }
//                         fixed(width: 600) {
//                             ...GatsbyImageSharpFixed
//                         }
//                     }
//                 }
//             }
//         }
//     `)
//     console.log(data)
//     return (
//     <Layout>
//         <SEO title="Scene Shop" />
//         <div className='project__header'>
//             <div className='project__hero'>
//               <div className='project__desc'>            
//                 <p></p>
//               </div>
//               <h1 className='project__title'>Engineering Technology Club</h1>
//             </div>
//             <HomeReturn />
//         </div>

//         <div className="image-gallery">
//             {data.images.nodes.map(image => (
//                 <Img className="image-gallery--item" key={image.id} fixed={image.childImageSharp.fixed} 
//                 alt="Picture of a stage set." />
//             ))}
//         </div>
//     </Layout>
//     )
// }

// export default EngineeringClub
