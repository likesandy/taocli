const { spawn } = require('child_process');

const spawnCommand = (...args) => {
  return new Promise((resolve, reject) => {
    // 子进程
    const childProcess = spawn(...args);
    // 子进程的输出流，输出到主进程的输出流
    childProcess.stdout.pipe(process.stdout);
    // 子进程的错误流，输出到主进程的错误流
    childProcess.stderr.pipe(process.stderr);
    // 子进程的关闭事件
    childProcess.on('close', () => {
      resolve();
    })
  })
}
 
module.exports = {
  spawnCommand
}