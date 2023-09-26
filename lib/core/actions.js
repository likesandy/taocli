const { promisify } = require('util')
// calback -> promise
const downloadRepo = promisify(require('download-git-repo'))
const { reactAdminRepo } = require('../config/repo')
const { spawnCommand } = require('../utils/terminal')

const createProject = async (project, ohterArgs) => {
  // 下载模板
  await downloadRepo(reactAdminRepo, project, { clone: true })

  // 执行终端命令install和dev
  const npm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  await spawnCommand(npm, ['i'], { cwd: `./${project}` })
  await spawnCommand(npm, ['dev'], { cwd: `./${project}` })
}

module.exports = {
  createProject,
}

