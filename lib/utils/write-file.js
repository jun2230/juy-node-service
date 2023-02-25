const { writeFile } = require("fs/promises")

function getWriteFile(path, content) {
    writeFile(path, content)
}

module.exports = getWriteFile
