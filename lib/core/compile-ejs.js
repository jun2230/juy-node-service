const ejs = require('ejs')
const path = require("path");

function compileEjs(tempName, data) {
    return new Promise((resolve, reject) => {
        // 获取文件路径
        const tempPath =  `../template/${tempName}`
        const absolutePath = path.resolve(__dirname, tempPath)

        // 使用ejs模板编译
        ejs.renderFile(absolutePath, data, (err, result) => {
            if (err) {
                console.log("编译模板失败：", err)
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

module.exports = compileEjs
