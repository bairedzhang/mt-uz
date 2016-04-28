'use strict';
const child = require('child_process');
const path = require('path');
const fs = require('fs');

function getBin(bin, dir) {
    let binPath = path.join(dir, 'node_modules', '.bin', bin)
    let dirObject = path.parse(dir);
    if (fs.existsSync(binPath)) {
        return binPath;
    } else if (dirObject.root != dirObject.dir) {
        return getBin(bin, path.resolve(dir, '../'));
    }
    return null;
}

const uzBinName = /^win/.test(process.platform) ? 'uz.cmd' : 'uz';
const uzBinPath = getBin(uzBinName, __dirname);
/**
 *
 * @param cwd 执行命令的路径, 即[项目根路径]/static
 * @param onClose  命令构建完成后回调
 * @param dest  编译后代码输出路径 默认是[cwd]/dest
 */

module.exports = function (cwd, onClose, dest) {
    const spawn = child.spawn;
    if (uzBinPath) {
        const uz = spawn(uzBinPath, ['release', dest || 'dest'], {
            cwd: cwd
        });

        uz.on('close', onClose);
    }
};
