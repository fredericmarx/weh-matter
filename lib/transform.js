const grayMatter = require('gray-matter')

function matter (file, options) {
  const matterData = grayMatter(file.contents, options)

  return Object.assign(file, {
    contents: matterData.content,
    metadata: matterData.data
  })
}

module.exports = matter