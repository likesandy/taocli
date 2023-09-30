const fs = require('fs')

const writeFile = (path, content) => {
  fs.promises.writeFile(path, content)
}

module.exports = writeFile

