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

// Create archive page for all projects, including pagination
// const getArchive = makeRequest(graphql, `
// {
//   allContentfulProject (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       node_locale: {eq: "en-US"}},)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const projects = result.data.allContentfulProject.edges
//   const projectsPerPage = 9
//   const numPages = Math.ceil(projects.length / projectsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/project` : `/project/${i + 1}`,
//       component: path.resolve("./src/templates/archive.js"),
//       context: {
//         limit: projectsPerPage,
//         skip: i * projectsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// // Create travel category page, including pagination
// const getTravel = makeRequest(graphql, `
// {
//   allContentfulProject (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       node_locale: {eq: "en-US"}
//       categories: {elemMatch: {category: {eq: "Travel"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const projects = result.data.allContentfulProject.edges
//   const projectsPerPage = 9
//   const numPages = Math.ceil(projects.length / projectsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/travel` : `/category/travel/${i + 1}`,
//       component: path.resolve("./src/templates/travel.js"),
//       context: {
//         limit: projectsPerPage,
//         skip: i * projectsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// // Create guide category page, including pagination
// const getGuide = makeRequest(graphql, `
// {
//   allContentfulProject (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       node_locale: {eq: "en-US"}
//       categories: {elemMatch: {category: {eq: "Guide"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const projects = result.data.allContentfulProject.edges
//   const projectsPerPage = 9
//   const numPages = Math.ceil(projects.length / projectsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/guide` : `/category/guide/${i + 1}`,
//       component: path.resolve("./src/templates/guide.js"),
//       context: {
//         limit: projectsPerPage,
//         skip: i * projectsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// // Create opinion category page, including pagination
// const getOpinion = makeRequest(graphql, `
// {
//   allContentfulProject (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       node_locale: {eq: "en-US"}
//       categories: {elemMatch: {category: {eq: "Opinion"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const projects = result.data.allContentfulProject.edges
//   const projectsPerPage = 9
//   const numPages = Math.ceil(projects.length / projectsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/opinion` : `/category/opinion/${i + 1}`,
//       component: path.resolve("./src/templates/opinion.js"),
//       context: {
//         limit: projectsPerPage,
//         skip: i * projectsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// // Create tech category page, including pagination
// const getTech = makeRequest(graphql, `
// {
//   allContentfulProject (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       node_locale: {eq: "en-US"}
//       categories: {elemMatch: {category: {eq: "Tech"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const projects = result.data.allContentfulProject.edges
//   const projectsPerPage = 9
//   const numPages = Math.ceil(projects.length / projectsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/tech` : `/category/tech/${i + 1}`,
//       component: path.resolve("./src/templates/tech.js"),
//       context: {
//         limit: projectsPerPage,
//         skip: i * projectsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

 return Promise.all([
   getProject,
//    getArchive,
//    getTravel,
//    getGuide,
//    getOpinion,
//    getTech
  ])
};
