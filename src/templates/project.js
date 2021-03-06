import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectFooter from '../components/projectFooter';
import SEO from '../components/seo';
import HomeReturn from '../components/home-return';
import './project.scss';

const ProjectTemplate = (props) => {
    return (
        <Layout>
        <SEO title={props.data.contentfulProject.seoTitle} description={props.data.contentfulProject.seoDescription} keywords={props.data.contentfulProject.seoKeywords} />
        <div className='project__header'>
            <div className='project__hero'>
              <div className='project__desc'>            
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulProject.projectDescription.childMarkdownRemark.html}`}
                } />
              </div>
              <h1 className='project__title'>{props.data.contentfulProject.pageTitle}</h1>
            </div>
            <HomeReturn />
        </div>
        <div id='project__wrapper'>
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
     pageTitle
     id
     slug
     projectDescription {
      childMarkdownRemark {
        html
      }
    }
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
