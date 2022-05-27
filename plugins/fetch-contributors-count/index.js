const path = require('path');
const fs = require('fs');

module.exports = () => ({
  name: "fetch-contributors-count",
  async loadContent() {
    try {
      const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './all-contributorsrc')).toString())

      return data.contributors.length
    } catch (e) {
    }
  },
  async contentLoaded({ content, actions }) {
    const { setGlobalData } = actions
    setGlobalData({ contributorsCount: content })
  },
})