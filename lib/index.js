#!/usr/bin/env node

const { program } = require('commander')
const helpOption = require("./core/help-option");
const create = require("./core/create");

// 配置options
helpOption()

// 配置command
create()

// 让commander解析precess.argv参数
program.parse(process.argv)


