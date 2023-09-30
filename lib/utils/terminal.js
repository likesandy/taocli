const { spawn } = require('child_process')
const path = require('path')
const ejs = require('ejs')

const spawnCommand = (...args) => {
  return new Promise((resolve, reject) => {
    // 子进程
    const childProcess = spawn(...args)
    // 子进程的输出流，输出到主进程的输出流
    childProcess.stdout.pipe(process.stdout)
    // 子进程的错误流，输出到主进程的错误流
    childProcess.stderr.pipe(process.stderr)
    // 子进程的关闭事件
    childProcess.on('close', () => {
      resolve()
    })
  })
}

const compileEjs = (templatePath, data) => {
  // 获取模板文件的路径
  const tempPath = `../template/${templatePath}`
  const absolutePath = path.resolve(__dirname, tempPath)

  return new Promise((resolve, reject) => {
    // 读取模板文件
    ejs.renderFile(absolutePath, data, (err, str) => {
      if (err) {
        reject(err)
        return
      }
      resolve(str)
    })
  })
}

module.exports = {
  spawnCommand,
  compileEjs,
}

