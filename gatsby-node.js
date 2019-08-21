exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  return new Promise((resolve) => {
    if (page.componentPath === `${__dirname}/src/pages/home/index.tsx`) {
      deletePage(page)
      createPage({ ...page, path: '/' })
    }

    resolve()
  })
}
