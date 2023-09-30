const { promisify } = require('util')
// calback -> promise
const downloadRepo = promisify(require('download-git-repo'))
const { reactAdminRepo } = require('../config/repo')
const { spawnCommand, compileEjs } = require('../utils/terminal')
const { program } = require('commander')
const writeFile = require('../utils/write-file')

const createProject = async (project, ohterArgs) => {
  // 下载模板
  await downloadRepo(reactAdminRepo, project, { clone: true })

  // 执行终端命令install和dev
  const npm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  await spawnCommand(npm, ['i'], { cwd: `./${project}` })
  await spawnCommand(npm, ['dev'], { cwd: `./${project}` })
}

const createRouteModuel = async (moduleName) => {
  //  1.创建模块文件夹
  const res = await compileEjs('route.module.tsx.ejs', {
    name: moduleName,
    path: program.opts().path,
  })
  //  2.将结果写入到文件中
  writeFile(`src/router/modules/${moduleName}.tsx`, res)
}

module.exports = {
  createProject,
  createRouteModuel,
}


