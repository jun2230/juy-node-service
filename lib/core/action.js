const compileEjs = require("./compile-ejs");
const {program} = require("commander");
const getWriteFile = require("../utils/write-file");

async function createAdd(name, tempName) {

    const result = await compileEjs(tempName, {
        name: name
    })

    // 将result写入对应文件夹中
    const path = tempName.split('.js.ejs')[0]
    await getWriteFile(`src/${path}/${name}.${path}.js`, result)
    console.log('创建成功：',name + '.' + path + '.js')

}

module.exports = {
    createAdd
}
