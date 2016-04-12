#手腾调用[uz](https://www.npmjs.com/package/uz)构建命令

##Installing

```sh
  npm install -g mt-uz
```

##usage
```javascript
   const mtUZ = require('mt-uz');
   /**
    * @param cwd 执行命令的路径, 即[项目根路径]/static
    * @param onClose  命令构建完成后回调
    * @param dest  编译后代码输出路径 默认是[cwd]/dest
    */
   mtUZ(cwd, onClose, dest );
```
