#!/usr/bin/env node
const { program } = require('commander')
const helpOptions = require('./lib/core/help.js')
const { createProject, createRouteModuel } = require('./lib/core/actions.js')

// 定义显示模块的版本号
program.version(require('./package.json').version)

// 定义help指令
helpOptions()

program
  .command('create <project> [...others]')
  .description('clone a repository into a folder')
  .action(createProject)

program
  .command('addRoute <cpnname> [...onthers]')
  .description('add react component into a folder')
  .action(createRouteModuel)

// 解析终端指令
program.parse(process.argv)

