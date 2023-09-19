const fs = require("fs");

module.exports = class myPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log(typeof compiler, "开始");
    let str = "";
    this.initplugin();
    compiler.hooks.emit.tap("emit", function () {
      console.log("emit+++");
    });
    compiler.hooks.initialize.tap("initialize", function () {
      console.log("emitadsasd+++");
    });
    // fs.writeFile("compiler.txt", str, (err, res) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log("文件写入成功");
    // });
  }
  initplugin() {
    if (this.options.env == "development") {
      console.log("开发环境");
    } else {
      console.log("生产环境");
    }
  }
  deepClone(objOrStr) {
    if (typeof objOrStr != "object") {
      return objOrStr;
    }
    let obj = Array.isArray(objOrStr) ? [] : {};
    for (const key in objOrStr) {
      if (Object.hasOwnProperty.call(objOrStr, key)) {
        obj[key] = this.deepClone(objOrStr[key]);
      }
    }
    return obj;
  }
};
