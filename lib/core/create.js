const { program } = require("commander")
const {createAdd} = require("./action");

function create() {

    program.command('add <name>')
           .description('创建router、service、controller、middleware文件')
           .action(name => {
               createAdd(name, 'router.js.ejs')
               createAdd(name, 'middleware.js.ejs')
               createAdd(name, 'controller.js.ejs')
               createAdd(name, 'service.js.ejs')
           })
}

module.exports = create
