const nodeFetch = require("node-fetch")

module.exports = () => ({
  name: "fetch-latest-release",
  async loadContent() {
    const response = await nodeFetch(
      `https://api.github.com/repos/timelystream/blazar-helpers/releases/latest`,
    )

    const data = await response.json()

    return data
  },
  async contentLoaded({ content, actions }) {
    const { setGlobalData } = actions
    setGlobalData({ release: content })
  },
})
