'use strict';
const child = require('child_process');
const path = require('path');
const uzBin = require.resolve('uz/bin/uz');
/**
 *
 * @param cwd 执行命令的路径, 默认为[项目根路径]/static
 * @param onClose  命令构建完成后回调
 * @param dest  编译后代码输出路径 默认是[项目跟路径]/static/dest
 */
module.exports = function (cwd, onClose, dest) {
    const spawn = child.spawn;
    const uz = spawn(uzBin, ['release', '-pod', dest || 'dest'], {
        cwd: cwd
    });

    uz.on('close', onClose);
};
