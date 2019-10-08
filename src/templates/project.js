import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import './project.css';

const ProjectTemplate = (props) => {
    return (
        <Layout>
        <SEO title={props.data.contentfulProject.seoTitle} description={props.data.contentfulProject.seoDescription} keywords={props.data.contentfulProject.seoKeywords} />
        <Nav />
        <div className='project__header'>
            <div className='project__hero' style={{backgroundImage:  `url(${props.data.contentfulProject.featuredImage.fluid.src})`}}></div>
            <div className='project__info'>
                <h1 className='project__title'>{props.data.contentfulProject.title}</h1>
            </div>
        </div>
        <div className='project__wrapper'>
            <div className='project__content'>
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulProject.content.childMarkdownRemark.html}`}
                } />
            </div>
        </div>
        </Layout>
    )
}

export default ProjectTemplate;


export const query = graphql`
 query ProjectTemplate($id: String!) {
   contentfulProject(id: {eq: $id}) {
     title
     id
     slug
     content {
       childMarkdownRemark {
         html
       }
     }
     seoTitle
     seoDescription
     seoAuthor
     seoKeywords
     seoImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
     featuredImage {
       fluid(maxWidth: 1200, quality: 100) {
         ...GatsbyContentfulFluid
         src
       }
     }
   }
 }
`
