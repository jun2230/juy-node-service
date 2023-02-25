const { program } = require("commander")

function helpOption() {

    // 处理version
    const version = require('../../package.json').version
    program.version(version, '-v --version')

    program.option('-t --text <text>', '测试' )

    program.on('--help', () => {
        console.log('help:')
    })
}

module.exports = helpOption
