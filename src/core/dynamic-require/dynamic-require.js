const fs = require('fs')
const path = require('path')

function dynamicRequire(dirName) {
    return fs.readdirSync(dirName)
        .filter((fileOrFolderName) => fileOrFolderName !== 'index.js')
        .map((folderName) => path.resolve(dirName, folderName))
        .map((absoluteFilePath) => {
            if (fs.statSync(absoluteFilePath).isDirectory()) {
                return path.resolve(absoluteFilePath, 'index.js')
            }
            return absoluteFilePath
        })
        .filter((absoluteFilePath) => fs.existsSync(absoluteFilePath))
        .map((folderFullPath) => require(folderFullPath))
        .reduce((modules, module) => {
            for (const key in module) {
                modules[key] = module[key]
            }
            return modules
        }, {})
}

module.exports = {
    dynamicRequire
}
