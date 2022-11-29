const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicProject {
        nodes {
          id
          uid
        }
      }
      allPrismicNewsarticle {
        nodes {
          id
          uid
        }
      }
    }
  `)
  const projectTemplate = path.resolve("src/templates/project.jsx")
  const newsTemplate = path.resolve("src/templates/newsarticle.jsx")
  pages.data.allPrismicProject.nodes.forEach(node => {
    createPage({
      path: `/project/${node.uid}`,
      component: projectTemplate,
      context: {
        uid: node.uid,
      },
    })
  })
  pages.data.allPrismicNewsarticle.nodes.forEach(node => {
    createPage({
      path: `/news/${node.uid}`,
      component: newsTemplate,
      context: {
        uid: node.uid,
      },
    })
  })
}
