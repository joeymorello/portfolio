const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
 // Query for nodes to use in creating pages.
 resolve(
   graphql(request).then(result => {
     if (result.errors) {
       reject(result.errors)
     }
     return result;
   })
 )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
 const { createPage } = actions;

// Create pages for each project.
 const getProject = makeRequest(graphql, `
   {
     allContentfulProject (
       sort: { fields: [createdAt], order: DESC }
       filter: {
         node_locale: {eq: "en-US"}},)
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulProject.edges.forEach(({ node }) => {
     createPage({
       path: `project/${node.slug}`,
       component: path.resolve(`src/templates/project.js`),
       context: {
         id: node.id,
       },
     })
   })
});

 return Promise.all([
   getProject,
  ])
};
