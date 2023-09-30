const { program } = require('commander')

function helpOptions() {
  program.option('-w --why', 'a coderwhy option')

  program.option('-s --src <src>', 'a source folder')
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages')
  program.option('-f --framework <framework>', 'your framework name')
  program.option('-p --path <path>', 'Specify the link', '/xx/xx')
  program.parse(process.argv)
}

module.exports = helpOptions

